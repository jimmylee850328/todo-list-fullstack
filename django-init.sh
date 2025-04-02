#!/bin/bash

# 確保權限
chmod +x backend/init_django.sh

# 建立 Django 專案
docker run --rm -v $(pwd)/backend:/app -w /app python:3.11-slim bash -c "
    pip install Django==5.0.3 djangorestframework==3.14.0 django-cors-headers==4.3.1 dj-database-url==2.1.0 &&
    django-admin startproject todolist_project . &&
    mkdir -p todo_app &&
    python manage.py startapp todo_app ."

echo "Django 專案已創建，開始自定義設置..."

# 使腳本可執行
chmod +x $0 