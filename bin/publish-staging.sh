#!/bin/bash

CURRENT_COMMIT_SHA=$(git rev-parse HEAD)
CURRENT_COMMITER=$(git show -s --format='%ae' $CURRENT_COMMIT_SHA)
CURRENT_BRANCH=$(git branch --show-current)

SITE_ALIAS=${1:-$CURRENT_COMMIT_SHA}
SITE_ACTOR=${2:-CURRENT_COMMITER}
SITE_REF=${3:-CURRENT_BRANCH}
DIST_PATH="./docs/.vuepress/dist"

yarn netlify --telemetry-disable
yarn netlify deploy \
  --dir="$DIST_PATH" \
  --alias "$SITE_ALIAS" \
  --message="$SITE_ALIAS::$SITE_ACTOR::$SITE_REF"
