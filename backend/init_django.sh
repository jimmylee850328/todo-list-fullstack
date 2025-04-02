#!/bin/bash

# 創建 Django 專案
django-admin startproject todolist_project .

# 創建應用
python manage.py startapp todos

# 準備資料庫
python manage.py makemigrations
python manage.py migrate

# 創建超級用戶
# python manage.py createsuperuser --noinput --username admin --email admin@example.com

echo "Django 專案初始化完成！" 