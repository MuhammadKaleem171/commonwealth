/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from '../../../../core';
import * as environments from '../../../../environments';
import * as CommonApi from '../../../index';

export declare namespace Community {
  interface Options {
    environment?: core.Supplier<environments.CommonApiEnvironment | string>;
    apiKey?: core.Supplier<string | undefined>;
    /** Override the address header */
    address?: core.Supplier<string | undefined>;
  }

  interface RequestOptions {
    /** The maximum time to wait for a response in seconds. */
    timeoutInSeconds?: number;
    /** The number of times to retry the request. Defaults to 2. */
    maxRetries?: number;
    /** A hook to abort the request. */
    abortSignal?: AbortSignal;
    /** Override the address header */
    address?: string | undefined;
  }
}

export declare class Community {
  protected readonly _options: Community.Options;

  constructor(_options?: Community.Options);

  /**
   * @param {CommonApi.GetCommunitiesRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getCommunities()
   */
  getCommunities(
    request?: CommonApi.GetCommunitiesRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.GetCommunitiesResponse>;

  /**
   * @param {CommonApi.GetCommunityRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getCommunity({
   *         id: "id"
   *     })
   */
  getCommunity(
    request: CommonApi.GetCommunityRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.GetCommunityResponse>;

  /**
   * @param {CommonApi.GetMembersRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.getMembers({
   *         communityId: "community_id"
   *     })
   */
  getMembers(
    request: CommonApi.GetMembersRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.GetMembersResponse>;

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
  createCommunity(
    request: CommonApi.CreateCommunityRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.CreateCommunityResponse>;

  /**
   * @param {CommonApi.UpdateCommunityRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.updateCommunity({
   *         id: "id"
   *     })
   */
  updateCommunity(
    request: CommonApi.UpdateCommunityRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.UpdateCommunityResponse>;

  /**
   * @param {CommonApi.CreateTopicRequest} request
   * @param {Community.RequestOptions} requestOptions - Request-specific configuration.
   *
   * @example
   *     await client.community.createTopic({
   *         communityId: "community_id"
   *     })
   */
  createTopic(
    request: CommonApi.CreateTopicRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.CreateTopicResponse>;

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
  updateTopic(
    request: CommonApi.UpdateTopicRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.UpdateTopicResponse>;

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
  deleteTopic(
    request: CommonApi.DeleteTopicRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.DeleteTopicResponse>;

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
  createGroup(
    request: CommonApi.CreateGroupRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.CreateGroupResponse>;

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
  updateGroup(
    request: CommonApi.UpdateGroupRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.UpdateGroupResponse>;

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
  deleteGroup(
    request: CommonApi.DeleteGroupRequest,
    requestOptions?: Community.RequestOptions,
  ): Promise<CommonApi.DeleteGroupResponse>;

  protected _getCustomAuthorizationHeaders(): Promise<{
    'x-api-key': string | undefined;
  }>;
}
