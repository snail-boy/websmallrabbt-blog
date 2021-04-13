#!/usr/bin/env bash

current_time=$(date  "+%Y/%m/%d")

git add .
git commit -m '提交说明'
git push
