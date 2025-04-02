# Todo List 全棧應用

這個專案是一個使用 Docker 容器化的待辦事項清單應用，包含 Next.js 前端、Django 後端和 PostgreSQL 資料庫。

## 技術棧

### 前端

- Next.js (最新版本)
- TypeScript
- TailwindCSS

### 後端

- Django
- Django REST Framework
- PostgreSQL

### 開發與部署

- Docker
- Docker Compose

## 功能介紹

- 瀏覽所有待辦事項
- 新增待辦事項
- 標記待辦事項為已完成/未完成
- 刪除待辦事項

## 如何運行

確保你的系統上安裝了 Docker 和 Docker Compose。

### 步驟 1: 克隆儲存庫

```bash
git clone <repository-url>
cd todo-list-full-stack
```

### 步驟 2: 啟動 Docker 容器

```bash
docker-compose up -d
```

這會啟動三個容器：

- Frontend (Next.js)：運行在 http://localhost:3000
- Backend (Django)：運行在 http://localhost:8000
- Database (PostgreSQL)：運行在 http://localhost:5432

### 步驟 3: 初始化 Django 資料庫

```bash
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
```

### 步驟 4: 訪問應用

- 前端: http://localhost:3000
- Django 管理後台: http://localhost:8000/admin
- API 端點: http://localhost:8000/api/todos/

## 開發

### 前端開發

```bash
cd frontend
npm install
npm run dev
```

### 後端開發

```bash
cd backend
python manage.py runserver
```

## API 文檔

### 獲取所有待辦事項

```
GET /api/todos/
```

### 獲取單個待辦事項

```
GET /api/todos/{id}/
```

### 創建待辦事項

```
POST /api/todos/
```

Body:

```json
{
  "title": "完成報告",
  "description": "在週五前完成季度報告",
  "completed": false
}
```

### 更新待辦事項

```
PATCH /api/todos/{id}/
```

Body:

```json
{
  "completed": true
}
```

### 刪除待辦事項

```
DELETE /api/todos/{id}/
```
