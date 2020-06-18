#!/bin/bash

IFS_backup=$IFS
IFS=$'\n'


# find name from portfolios.md
names=($(grep '*' portfolios.md | awk -F"[" '{print $2}' | awk -F"]" '{print $1}'))

# find urls
urls=($(grep '*' portfolios.md | awk -F"(" '{print $2}' | awk -F")" '{print $1}'))

IFS=$IFS_backup


length=${#names[@]}
echo "Found $length names..."

length=${#urls[@]}
echo "Found $length urls..."

[ -e ./src/data/sites.yaml ] && rm ./src/data/sites.yaml
touch ./src/data/sites.yaml
echo "# This file is created by a script, so do not edit it manually"> ./src/data/sites.yaml
for i in "${!names[@]}"
do
	echo "- url: ${urls[i]}">> ./src/data/sites.yaml
    echo "  name: ${names[i]}">> ./src/data/sites.yaml
done
