#!/bin/bash
cd ./../
shopt -s extglob
if [ -f ./404.html ]
then
    rm 404.html
    cp index.html ./404.html
    echo "404.html was found and recreated."
else
    cp index.html ./404.html
    echo "Successfully created 404.html."
fi
