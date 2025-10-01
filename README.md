# Data Acquisition Framework

[![TypeScript](https://img.shields.io/badge/typescript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/TensorScholar/data-acquisition-framework)
[![Node.js](https://img.shields.io/badge/node.js-20.x-green.svg)](https://nodejs.org/)

> Enterprise-grade data extraction pipeline built with TypeScript, featuring DDD, CQRS, and comprehensive testing.

## 🏗️ Architecture

```mermaid
graph TB
    subgraph "🌐 External Sources"
        WEB[Websites]
        API[REST APIs]
        SPA[Single Page Apps]
        STREAM[Real-time Streams]
    end
    
    subgraph "🔌 Adapters Layer"
        HTTP[HTTP Client]
        SEL[WebDriver]
        QUEUE[Message Queue]
    end
    
    subgraph "🏛️ Infrastructure Layer"
        PARSE[Parsers]
        CACHE[Multi-level Cache]
        DB[(Elasticsearch)]
        REDIS[(Redis)]
        MONITOR[Prometheus]
    end
    
    subgraph "⚙️ Application Layer"
        EXTRACT[Extraction Service]
        TRANSFORM[Transformation Service]
        PERSIST[Persistence Service]
        CQRS[CQRS Service]
    end
    
    subgraph "🎯 Core Domain"
        ENTITIES[Product Entities]
        VALUE_OBJ[Value Objects]
        SPECS[Business Rules]
        WORKFLOWS[Workflows]
    end
    
    WEB --> HTTP
    API --> HTTP
    SPA --> SEL
    STREAM --> QUEUE
    
    HTTP --> PARSE
    SEL --> PARSE
    QUEUE --> PARSE
    
    PARSE --> EXTRACT
    EXTRACT --> TRANSFORM
    TRANSFORM --> PERSIST
    PERSIST --> CQRS
    
    CQRS --> ENTITIES
    ENTITIES --> VALUE_OBJ
    VALUE_OBJ --> SPECS
    SPECS --> WORKFLOWS
    
    CACHE --> EXTRACT
    DB --> PERSIST
    REDIS --> CACHE
    MONITOR --> PARSE
```

## ✨ Key Features

- **Multi-Source Extraction** - Static sites, SPAs, and APIs
- **Advanced Caching** - Multi-level with Redis and in-memory
- **Production Ready** - Docker, Kubernetes, and observability
- **Comprehensive Testing** - Unit, integration, chaos, and mutation tests
- **Functional Core** - Immutable data structures and error handling

## 🚀 Quick Start

### Install
```bash
git clone https://github.com/TensorScholar/data-acquisition-framework.git
cd data-acquisition-framework
npm install
```

### Configure
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Run
```bash
# Development
npm run dev

# Production
npm run build && npm start

# With Docker
docker-compose up -d
```

## 💻 Usage

### Basic Extraction
```typescript
import { ExtractionService } from './src/application/services/extraction.service';

const service = new ExtractionService();
const result = await service.extractFromUrl('https://example.com/product/123');

if (result.isSuccess()) {
  console.log('Product:', result.getValue());
}
```

### Batch Processing
```typescript
import { BatchWorkflow } from './src/application/workflows/batch.workflow';

const workflow = new BatchWorkflow();
const urls = ['https://example.com/product/1', 'https://example.com/product/2'];
const results = await workflow.processBatch(urls);
```

## 🐳 Deployment

### Docker
```bash
docker build -t data-acquisition-framework .
docker run -p 3000:3000 data-acquisition-framework
```

### Kubernetes
```bash
kubectl apply -f k8s/
kubectl get pods -l app=data-acquisition-framework
```

## 🧪 Testing

```bash
npm test              # Unit tests
npm run test:coverage # Coverage report
npm run test:chaos    # Chaos engineering
```

## 📊 Monitoring

Access metrics at `http://localhost:3000/metrics`

- **Extraction Rate** - Products per minute
- **Success Rate** - Successful extractions
- **Error Rate** - Failed extractions
- **Response Time** - Average processing time

## 📁 Project Structure

```
src/
├── core/           # Domain entities & business logic
├── application/    # Use cases & workflows
├── infrastructure/ # External concerns
├── adapters/       # External integrations
└── shared/         # Common utilities
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

## 👨‍💻 Author & Programmer

**Mohammad Atashi**
