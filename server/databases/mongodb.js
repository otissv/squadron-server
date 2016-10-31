/*
* MongoDB connection
*/


'use strict';

import mongodb from 'mongodb';

export default {
  connect (uri) {
    return mongodb.MongoClient.connect(uri, {native_parser:true});
  }
};
