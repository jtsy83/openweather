#!/bin/sh -l

echo "Have a nice day $1"
time=$(date)
echo "::set-output name=time::$time"
