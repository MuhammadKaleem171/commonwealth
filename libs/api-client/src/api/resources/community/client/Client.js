/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import urlJoin from 'url-join';
import * as core from '../../../../core';
import * as environments from '../../../../environments';
import * as errors from '../../../../errors/index';
import * as serializers from '../../../../serialization/index';
export class Community {
  constructor(_options = {}) {
    this._options = _options;
  }
  /**
   * @param {CommonApi.GetCommunitiesRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getCommunities()
   */
  getCommunities(request = {}, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const {
        limit,
        cursor,
        orderBy,
        orderDirection,
        relevanceBy,
        network,
        base,
        tagIds,
        includeNodeInfo,
        stakeEnabled,
        hasGroups,
        includeLast30DayThreadCount,
      } = request;
      const _queryParams = {};
      if (limit != null) {
        _queryParams['limit'] = limit;
      }
      if (cursor != null) {
        _queryParams['cursor'] = cursor;
      }
      if (orderBy != null) {
        _queryParams['order_by'] = orderBy;
      }
      if (orderDirection != null) {
        _queryParams['order_direction'] = orderDirection;
      }
      if (relevanceBy != null) {
        _queryParams['relevance_by'] = relevanceBy;
      }
      if (network != null) {
        _queryParams['network'] = network;
      }
      if (base != null) {
        _queryParams['base'] = base;
      }
      if (tagIds != null) {
        if (Array.isArray(tagIds)) {
          _queryParams['tag_ids'] = tagIds.map((item) => item.toString());
        } else {
          _queryParams['tag_ids'] = tagIds.toString();
        }
      }
      if (includeNodeInfo != null) {
        _queryParams['include_node_info'] = includeNodeInfo.toString();
      }
      if (stakeEnabled != null) {
        _queryParams['stake_enabled'] = stakeEnabled.toString();
      }
      if (hasGroups != null) {
        _queryParams['has_groups'] = hasGroups.toString();
      }
      if (includeLast30DayThreadCount != null) {
        _queryParams['include_last_30_day_thread_count'] =
          includeLast30DayThreadCount.toString();
      }
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'GetCommunities',
        ),
        method: 'GET',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        queryParameters: _queryParams,
        requestType: 'json',
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.GetCommunitiesResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.GetCommunityRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getCommunity({
   *         id: "id"
   *     })
   */
  getCommunity(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const { id, includeNodeInfo } = request;
      const _queryParams = {};
      _queryParams['id'] = id;
      if (includeNodeInfo != null) {
        _queryParams['include_node_info'] = includeNodeInfo.toString();
      }
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'GetCommunity',
        ),
        method: 'GET',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        queryParameters: _queryParams,
        requestType: 'json',
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.GetCommunityResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.GetMembersRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getMembers({
   *         communityId: "community_id"
   *     })
   */
  getMembers(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const {
        limit,
        cursor,
        orderBy,
        orderDirection,
        search,
        communityId,
        includeRoles,
        memberships,
        includeGroupIds,
        includeStakeBalances,
        allowedAddresses,
      } = request;
      const _queryParams = {};
      if (limit != null) {
        _queryParams['limit'] = limit;
      }
      if (cursor != null) {
        _queryParams['cursor'] = cursor;
      }
      if (orderBy != null) {
        _queryParams['order_by'] = orderBy;
      }
      if (orderDirection != null) {
        _queryParams['order_direction'] = orderDirection;
      }
      if (search != null) {
        _queryParams['search'] = search;
      }
      _queryParams['community_id'] = communityId;
      if (includeRoles != null) {
        _queryParams['include_roles'] = includeRoles.toString();
      }
      if (memberships != null) {
        _queryParams['memberships'] = memberships;
      }
      if (includeGroupIds != null) {
        _queryParams['include_group_ids'] = includeGroupIds.toString();
      }
      if (includeStakeBalances != null) {
        _queryParams['include_stake_balances'] =
          includeStakeBalances.toString();
      }
      if (allowedAddresses != null) {
        _queryParams['allowedAddresses'] = allowedAddresses;
      }
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'GetMembers',
        ),
        method: 'GET',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        queryParameters: _queryParams,
        requestType: 'json',
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.GetMembersResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.CreateCommunityRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.createCommunity({
   *         id: "id",
   *         name: "name",
   *         chainNodeId: 1,
   *         base: CommonApi.CreateCommunityRequestBase.Cosmos,
   *         userAddress: "user_address",
   *         defaultSymbol: "default_symbol"
   *     })
   */
  createCommunity(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'CreateCommunity',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.CreateCommunityRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.CreateCommunityResponse.parseOrThrow(
          _response.body,
          {
            unrecognizedObjectKeys: 'passthrough',
            allowUnrecognizedUnionMembers: true,
            allowUnrecognizedEnumValues: true,
            breadcrumbsPrefix: ['response'],
          },
        );
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.UpdateCommunityRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.updateCommunity({
   *         id: "id"
   *     })
   */
  updateCommunity(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'UpdateCommunity',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.UpdateCommunityRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.UpdateCommunityResponse.parseOrThrow(
          _response.body,
          {
            unrecognizedObjectKeys: 'passthrough',
            allowUnrecognizedUnionMembers: true,
            allowUnrecognizedEnumValues: true,
            breadcrumbsPrefix: ['response'],
          },
        );
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.CreateTopicRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.createTopic({
   *         communityId: "community_id"
   *     })
   */
  createTopic(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'CreateTopic',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.CreateTopicRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.CreateTopicResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.UpdateTopicRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.updateTopic({
   *         topicId: 1.1,
   *         communityId: "community_id"
   *     })
   */
  updateTopic(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'UpdateTopic',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.UpdateTopicRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.UpdateTopicResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.DeleteTopicRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.deleteTopic({
   *         communityId: "community_id",
   *         topicId: 1
   *     })
   */
  deleteTopic(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'DeleteTopic',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.DeleteTopicRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.DeleteTopicResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.CreateGroupRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.createGroup({
   *         communityId: "community_id",
   *         metadata: {
   *             name: "name",
   *             description: "description"
   *         }
   *     })
   */
  createGroup(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'CreateGroup',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.CreateGroupRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.CreateGroupResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.UpdateGroupRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.updateGroup({
   *         communityId: "community_id",
   *         groupId: 1
   *     })
   */
  updateGroup(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'UpdateGroup',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.UpdateGroupRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.UpdateGroupResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  /**
   * @param {CommonApi.DeleteGroupRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.deleteGroup({
   *         communityId: "community_id",
   *         groupId: 1
   *     })
   */
  deleteGroup(request, requestOptions) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
      const _response = yield core.fetcher({
        url: urlJoin(
          (_a = yield core.Supplier.get(this._options.environment)) !== null &&
            _a !== void 0
            ? _a
            : environments.CommonApiEnvironment.Default,
          'DeleteGroup',
        ),
        method: 'POST',
        headers: Object.assign(
          {
            address:
              (yield core.Supplier.get(this._options.address)) != null
                ? yield core.Supplier.get(this._options.address)
                : undefined,
            'X-Fern-Language': 'JavaScript',
            'X-Fern-Runtime': core.RUNTIME.type,
            'X-Fern-Runtime-Version': core.RUNTIME.version,
          },
          yield this._getCustomAuthorizationHeaders(),
        ),
        contentType: 'application/json',
        requestType: 'json',
        body: serializers.DeleteGroupRequest.jsonOrThrow(request, {
          unrecognizedObjectKeys: 'strip',
        }),
        timeoutMs:
          (requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.timeoutInSeconds) != null
            ? requestOptions.timeoutInSeconds * 1000
            : 60000,
        maxRetries:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.maxRetries,
        abortSignal:
          requestOptions === null || requestOptions === void 0
            ? void 0
            : requestOptions.abortSignal,
      });
      if (_response.ok) {
        return serializers.DeleteGroupResponse.parseOrThrow(_response.body, {
          unrecognizedObjectKeys: 'passthrough',
          allowUnrecognizedUnionMembers: true,
          allowUnrecognizedEnumValues: true,
          breadcrumbsPrefix: ['response'],
        });
      }
      if (_response.error.reason === 'status-code') {
        throw new errors.CommonApiError({
          statusCode: _response.error.statusCode,
          body: _response.error.body,
        });
      }
      switch (_response.error.reason) {
        case 'non-json':
          throw new errors.CommonApiError({
            statusCode: _response.error.statusCode,
            body: _response.error.rawBody,
          });
        case 'timeout':
          throw new errors.CommonApiTimeoutError();
        case 'unknown':
          throw new errors.CommonApiError({
            message: _response.error.errorMessage,
          });
      }
    });
  }
  _getCustomAuthorizationHeaders() {
    return __awaiter(this, void 0, void 0, function* () {
      const apiKeyValue = yield core.Supplier.get(this._options.apiKey);
      return { 'x-api-key': apiKeyValue };
    });
  }
}