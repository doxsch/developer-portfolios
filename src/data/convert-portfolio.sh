#!/bin/bash

IFS_backup=$IFS
IFS=$'\n'


# find name from portfolios.md
names=($(grep '*' portfolios.md | awk -F"[" '{print $2}' | awk -F"]" '{print $1}'))

# find urls
urls=($(grep '*' portfolios.md | grep -o '(.*)'| sed -r 's/\((.*)\)/\1/'))

IFS=$IFS_backup


length=${#names[@]}
echo "Found $length names..."

length=${#urls[@]}
echo "Found $length urls..."

[ -e sites.yaml ] && rm sites.yaml
echo "# This file is created by a script, so do not edit it manually"> sites.yaml
for i in "${!names[@]}"
do
	echo "- url: ${urls[i]}">> sites.yaml
    echo "  name: ${names[i]}">> sites.yaml
done
