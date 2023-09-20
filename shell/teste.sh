#!/bin/bash

usage() { echo "Usage: $0 [-a <anything>] [-b <anything>] [-c <anything>]" 1>&2; exit 1; }

while getopts ":a:b:c:" arg; do
  case $arg in
    a)
      variable=$OPTARG
      echo testeA $variable $OPTIND
      ;;
    b)
      variable=$OPTARG
      echo testeB $variable $OPTIND
      ;;
    c)
      variable=$OPTARG
      echo testeC $variable $OPTIND
      ;;
    :)  # If expected argument omitted:
      echo "EPAAA: -${OPTARG} requires an argument."
      usage
      ;;
    *)  # If unknown (any other) option:
      usage
      ;;
  esac
done
shift $((OPTIND-1))

#'echo' command can be declared with or without quotes
echo chegou ateh o final

exit 0