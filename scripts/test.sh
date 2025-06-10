#!/bin/bash
set -e
if ! command -v jekyll >/dev/null 2>&1; then
  echo "Jekyll not installed, skipping build" >&2
  exit 0
fi
bundle exec jekyll build

