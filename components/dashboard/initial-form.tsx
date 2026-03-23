"use client";

import { cn } from "@/lib/utils";
import {
    Building2,
    ChevronLeft,
    Command,
    Globe,
    Icon,
    LinkIcon,
    LucideIcon,
    Sparkles,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface InitialData {
    businessName: string;
    websiteUrl: string;
    externalLinks: string;
}

type Step = {
    id: string
    label: string
    question: string
    description: string
    icon: LucideIcon
    placeholder: string
    type: "text" | "url" | "textarea"
    field: keyof InitialData
    badge?: string
}

const STEPS: Step[] = [
    {
        id: "name",
        label: "Business Name",
        question: "What is the name of your business?",
        description: "This will be the identity of your AI assistant.",
        icon: Building2,
        placeholder: "e.g. Acme Corp",
        type: "text",
        field: "businessName" as keyof InitialData,
    },
    {
        id: "website",
        label: "Website",
        question: "What is the URL of your website?",
        description:
            "This will help your AI assistant understand your business.",
        icon: Globe,
        placeholder: "e.g. https://acme.com",
        type: "url",
        field: "websiteUrl" as keyof InitialData,
    },
    {
        id: "links",
        label: "Extra Context",
        question: "Any other links you want to share?",
        description:
            "Add external links like Notion pages or Help docs to give your AI assistant more context.",
        icon: LinkIcon,
        placeholder: "e.g. https://notion.so/docs...",
        type: "textarea",
        badge: "Optional",
        field: "externalLinks" as keyof InitialData,
    },
];

const InitialForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<InitialData>({
        businessName: "",
        websiteUrl: "",
        externalLinks: "",
    });

    const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

    const progress = ((currentStep + 1) / STEPS.length) * 100;
        const stepData = STEPS[currentStep];

    const Icon = stepData.icon;

    useEffect(() => {
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 200);

        return () => clearTimeout(timer);
    }, [currentStep]);

    const isStepValid =
        currentStep === 2 ||
        formData[stepData.field].trim() !== "";

    const handleBack = () => {
        if (currentStep > 0) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev - 1);
                setIsAnimating(false);
            }, 300);
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (stepData.type === "textarea") {
            if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                e.preventDefault();
                handleNext();
            }
            return;
        }

        if (e.key === "Enter") {
            e.preventDefault();
            handleNext();
        }
    };

    const handleNext = () => {
        if (!isStepValid) return;

        if (currentStep < STEPS.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
                setIsAnimating(false);
            }, 300);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        const response = await fetch("/api/metadata/store", {
            method: "POST",
            headers: {
                "content-type": "application/json", 
            },
            body: JSON.stringify({
                business_name: formData.businessName,
                website_url: formData.websiteUrl,
                external_links: formData.externalLinks
            })
        })
        
        await response.json();
        setIsSubmitting(false);
        window.location.reload()
    };

    return (
        <div className="w-full max-w-xl mx-auto min-h-[400px] flex flex-col items-center justify-center px-4">

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/5">
                <div
                    className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <h2 className="mb-6 text-sm uppercase tracking-widest text-zinc-500">
                Setup your account
            </h2>

            {isSubmitting ? (
                <div className="flex flex-col items-center text-center animate-in fade-in duration-700">
                    <div className="relative mb-8">
                        <div className="absolute inset-0 blur-xl bg-indigo-500/20 rounded-full animate-pulse" />
                        <div className="relative h-16 w-16 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Sparkles className="animate-bounce text-white w-8 h-8" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-medium mb-2 text-white">
                        Storing your organization info!
                    </h2>
                    <p className="text-zinc-500">
                        Scanning {formData.websiteUrl} ...
                    </p>
                </div>
            ) : (
                <div
                    className={cn(
                        "transform transition-all duration-500 ease-in-out w-full",
                        isAnimating
                            ? "opacity-0 translate-y-4 scale-95"
                            : "opacity-100 translate-y-0 scale-100"
                    )}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-2 items-center">
                            {currentStep > 0 && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={handleBack}
                                    className="text-zinc-500 hover:text-zinc-300 hover:bg-white/5 rounded-full w-8 h-8"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </Button>
                            )}
                            <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
                                Step {currentStep + 1} of {STEPS.length}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                                {stepData.question}
                            </h1>
                            <p className="text-zinc-500">
                                {stepData.description}
                            </p>
                        </div>

                        {/* Input */}
                        <div>
                            {stepData.type === "textarea" ? (
                                <Textarea
                                    ref={inputRef as any}
                                    value={formData[stepData.field]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [stepData.field]: e.target.value,
                                        })
                                    }
                                    onKeyDown={handleKeyDown}
                                    placeholder={stepData.placeholder}
                                    className="w-full bg-transparent border-0 border-b border-white/10 text-xl md:text-2xl py-4 text-white placeholder:text-zinc-700 focus-visible:border-indigo-500 rounded-none shadow-none transition-colors"
                                />
                            ) : (
                                <Input
                                    ref={inputRef as any}
                                    type={stepData.type}
                                    value={formData[stepData.field]}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            [stepData.field]: e.target.value,
                                        })
                                    }
                                    onKeyDown={handleKeyDown}
                                    placeholder={stepData.placeholder}
                                    className="w-full bg-transparent border-0 border-b border-white/10 text-xl md:text-2xl py-4 text-white placeholder:text-zinc-700 focus-visible:border-indigo-500 rounded-none shadow-none transition-colors"
                                />
                            )}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2">
                                <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex items-center justify-between pt-8">
                                <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500">
                                    {
                                        stepData.type === "textarea" ?
                                            <>
                                                <Command className="w-4 h-4" />
                                                <span>+ Enter</span>
                                            </> : <span>+ Enter</span>
                                    }
                                    <span className="ml-1">to continue</span>
                                </div>
                                <Button
                                    onClick={handleNext}
                                    disabled={!isStepValid}
                                    className={cn("rounded-full px-8 py-6 font-medium transition-all duration-300",
                                        isStepValid ? "bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 shadow-lg shadow-white/10" : "bg-white/5 text-zinc-500 cursor-not-allowed")}
                                >
                                    {currentStep === STEPS.length - 1
                                        ? "Finish Setup"
                                        : "Continue"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InitialForm;