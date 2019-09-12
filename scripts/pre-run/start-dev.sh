#!/usr/bin/bash

# Definição das variáveis de ambiente para execução


BASEDIR=$PROJECTDIR/scripts/pre-run


export NODE_ENV=development;

$BASEDIR/../build/dev.sh
