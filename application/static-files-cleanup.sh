#!/bin/bash
cd ./../
shopt -s extglob
if [ -f ./index.html ]
then
    rm !(application|LICENSE|README.md)
    echo "Root directory was cleaned up."
else
    echo "Root directory is clean."
fi
