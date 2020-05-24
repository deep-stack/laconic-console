//
// Copyright 2020 DxOS
//

import isObject from 'lodash.isobject';
import omit from 'lodash.omit';
import transform from 'lodash.transform';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import Json from '../components/Json';

import { useQueryStatusReducer } from '../hooks';

import QUERY_STATUS from '../../gql/status.graphql';

const removeTypename = data => transform(data, (result, value, key) => {
  result[key] = isObject(value) && '__typename' in value ? omit(value, '__typename') : value;
});

const Status = () => {
  const data = useQueryStatusReducer(useQuery(QUERY_STATUS, { pollInterval: 5000 }));
  if (!data) {
    return null;
  }

  return (
    <Json data={removeTypename(data)} />
  );
};

export default Status;
