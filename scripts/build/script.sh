#!/usr/bin/bash


BASEDIR=$(dirname "$0")


mkdir $BASEDIR/../../generated


FILE=$BASEDIR/../../generated/database.json

echo "" > $FILE
echo { >> $FILE
echo -e "\t" \"uri\": \"$DB_URI\", >> $FILE
echo -e "\t" \"label\": \"$DB_LABEL\" >> $FILE
echo } >> $FILE



FILE=$BASEDIR/../../generated/database.json

echo "" > $FILE
echo { >> $FILE
echo -e "\t" \"uri\": \"$DB_URI\", >> $FILE
echo -e "\t" \"label\": \"$DB_LABEL\" >> $FILE
echo } >> $FILE




FILE=$BASEDIR/../../generated/jwt.json

echo "" > $FILE
echo { >> $FILE
echo -e "\t" \"secret\": \"$JWT_SECRET\", >> $FILE
echo -e "\t" \"signOptions\": { \"expiresIn\": \"$JWT_EXPIRE_TIME\" } >> $FILE
echo } >> $FILE



FILE=$BASEDIR/../../generated/firebase-key.json

echo $FIREBASE_KEY > $FILE


