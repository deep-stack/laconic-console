//
// Copyright 2020 DXOS.org
//

import debug from 'debug';
import defaultsDeep from 'lodash.defaultsdeep';

import { ipfsResolvers } from './ipfs';
import { systemResolvers } from './system';
import { logResolvers } from './log';

// eslint-disable-next-line
const log = debug('dxos:console:server:resolvers');

/**
 * Resolvers
 * https://www.apollographql.com/docs/graphql-tools/resolvers
 */
export const resolvers = defaultsDeep({

  // TODO(burdon): Auth.
  // https://www.apollographql.com/docs/apollo-server/data/errors/#codes

}, ipfsResolvers, systemResolvers, logResolvers);
