

BASEDIR=$(dirname "$0")

echo "Executing scripts/build/dev.sh ..."

source $BASEDIR/../envs-config/dev.sh

bash $BASEDIR/script.sh

