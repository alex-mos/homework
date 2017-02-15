Домашнее задание
===

Урок 1: Создание докер-контейнера
-----

Склонировать репозиторий:
```
git clone git@github.com:alex-mos/homework.git
```
Перейти в папку первого задания:
```
cd homework/lesson1
```
Собрать контейнер
```
docker build -t homework/lesson1 .
```
Запустить контейнер и пробросить на 80 порт:
```
docker run -d -p 80:80 homework/lesson1
```
Открыть [localhost](http://localhost) в браузере.
