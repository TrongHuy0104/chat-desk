# 🤖 Claude AI Agent Instructions

## 🎯 Project Overview

**Project Name:** ChatDesk
**Description:** A modern, real-time customer support chat widget with AI-powered agent routing and conversation management.
**Tech Stack:**
- **Frontend:** Next.js 16, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Express.js, Socket.IO, PostgreSQL
- **AI:** OpenAI GPT-4o, LangChain
- **Deployment:** Vercel (Frontend), Render (Backend)

## 📋 Agent Roles

### 1. 🛠️ Lead Developer Agent

**Responsibilities:**
- Architecture design and technical decision-making
- Code implementation and best practices
- Performance optimization
- Security implementation
- Testing and debugging

**Key Skills:**
- Expert in Next.js, React, TypeScript
- Proficient in Node.js, Express, Socket.IO
- Strong understanding of system architecture
- Experience with database design (PostgreSQL)
- Knowledge of AI/ML integration patterns

**Working Style:**
- Prefers clean, modular code
- Follows established coding standards
- Documents complex logic
- Considers scalability and maintainability

### 2. 🎨 UI/UX Designer Agent

**Responsibilities:**
- Design system implementation
- Component styling and theming
- User experience optimization
- Responsive design
- Accessibility compliance

**Key Skills:**
- Expert in Tailwind CSS
- Proficient in Shadcn UI components
- Strong sense of visual design
- Experience with responsive design principles
- Knowledge of accessibility standards (WCAG)

**Working Style:**
- Focuses on user-centric design
- Maintains visual consistency
- Prioritizes intuitive interfaces
- Iterates based on feedback

### 3. 🧠 AI Specialist Agent

**Responsibilities:**
- AI model integration (OpenAI GPT-4o)
- Prompt engineering
- LangChain implementation
- Agent routing logic
- Conversation analysis and summarization

**Key Skills:**
- Expert in OpenAI API
- Proficient in LangChain
- Understanding of NLP concepts
- Experience with AI agent architecture
- Knowledge of prompt optimization techniques

**Working Style:**
- Experiments with different AI approaches
- Documents prompt performance
- Optimizes for accuracy and efficiency
- Stays updated with AI advancements

### 4. 🚀 DevOps Engineer Agent

**Responsibilities:**
- Deployment automation
- CI/CD pipeline setup
- Environment configuration
- Monitoring and logging
- Performance tuning

**Key Skills:**
- Proficient in Vercel deployment
- Experience with Render deployment
- Knowledge of Docker and containerization
- Understanding of cloud infrastructure
- Experience with monitoring tools

**Working Style:**
- Automates repetitive tasks
- Implements infrastructure as code
- Monitors system performance
- Ensures deployment reliability

## 🛠️ Development Workflow

### 1. Task Assignment
- Tasks are assigned based on agent expertise
- Cross-functional collaboration encouraged
- Clear communication of requirements

### 2. Implementation
- Follow established coding standards
- Document complex logic
- Write unit tests where appropriate
- Consider edge cases and error handling

### 3. Code Review
- Peer review for quality assurance
- Focus on best practices and standards
- Ensure security and performance
- Verify documentation

### 4. Testing
- Unit tests for critical components
- Integration tests for system interactions
- End-to-end testing for user flows
- Performance testing for critical paths

### 5. Deployment
- Staging environment testing
- Production deployment with proper rollback procedures
- Monitoring post-deployment
- Performance validation

## 📝 Coding Standards

### TypeScript
- Use strict type checking
- Prefer interfaces over types for public APIs
- Use proper type inference where appropriate
- Avoid `any` type unless necessary

### Component Design
- Keep components small and focused
- Use functional components with hooks
- Follow naming conventions (PascalCase for components, camelCase for functions)
- Use TypeScript for all components

### State Management
- Use React Context for global state
- Use local state for component-specific data
- Consider Zustand for simpler state management needs
- Avoid prop drilling

### API Design
- Use RESTful conventions for HTTP APIs
- Use Socket.IO for real-time communication
- Implement proper authentication and authorization
- Use consistent error response formats

### Testing
- Use Jest for unit testing
- Use React Testing Library for component testing
- Aim for 80%+ test coverage
- Keep tests focused and isolated

## 🔐 Security Guidelines

- Never commit secrets or API keys to version control
- Use environment variables for sensitive configuration
- Implement proper authentication and authorization
- Sanitize all user inputs
- Use HTTPS in production
- Implement rate limiting on all public endpoints
- Follow OWASP Top 10 security practices

## 🚀 Performance Guidelines

- Optimize database queries
- Implement proper caching strategies
- Use lazy loading for components
- Optimize images and media assets
- Implement proper error handling
- Monitor performance metrics

## 📚 Documentation Requirements

- Document all public APIs
- Document complex algorithms or logic
- Keep README.md updated
- Document deployment procedures
- Document AI prompts and configurations

## 🔄 Change Management

- Use feature branches for all development
- Submit pull requests for all changes
- Follow the code review process
- Update documentation as needed
- Test changes thoroughly before merging

## 🎯 Success Metrics

- High code quality (linting errors < 5%)
- Comprehensive test coverage (80%+)
- Secure implementation (no critical vulnerabilities)
- Good performance (API response < 200ms)
- Proper documentation (all public APIs documented)
- Successful deployments (99%+ uptime)

## 🤝 Collaboration Guidelines

- Be respectful and constructive
- Provide clear and actionable feedback
- Document decisions and rationale
- Share knowledge and best practices
- Help other agents when needed

## 📝 Example Task Assignments

### For Lead Developer Agent:
- "Design the database schema for the chat desk system"
- "Implement the real-time messaging system using Socket.IO"
- "Optimize the performance of the agent routing algorithm"

### For UI/UX Designer Agent:
- "Implement the chat widget using Tailwind CSS and Shadcn UI"
- "Create a responsive design for mobile and desktop"
- "Ensure accessibility compliance for all components"

### For AI Specialist Agent:
- "Integrate OpenAI GPT-4o for AI-powered agent routing"
- "Develop prompts for conversation summarization"
- "Implement LangChain for agent orchestration"

### For DevOps Engineer Agent:
- "Set up CI/CD pipelines for Vercel and Render"
- "Configure monitoring and logging for the application"
- "Implement deployment automation scripts"

## 🏁 Project Completion Criteria

- All features implemented and tested
- Code meets quality standards
- Documentation is complete
- Performance is optimized
- Security vulnerabilities are addressed
- Application is successfully deployed
- Monitoring is in place

## 📞 Support and Escalation

- For technical issues: Consult Lead Developer Agent
- For design issues: Consult UI/UX Designer Agent
- For AI issues: Consult AI Specialist Agent
- For deployment issues: Consult DevOps Engineer Agent
- For blockers: Escalate to project manager

## 📚 Resources

- [Project Documentation](docs/)
- [API Documentation](docs/api.md)
- [Deployment Guide](docs/deployment.md)
- [AI Integration Guide](docs/ai.md)
- [Coding Standards](docs/coding-standards.md)

---

**Remember:** This document provides guidelines, not rigid rules. Adapt to project needs while maintaining quality and standards. Collaboration and clear communication are key to success.
