import { trpc } from '@hicommonwealth/adapters';
import { command } from '@hicommonwealth/core';
import { Community, models } from '@hicommonwealth/model';
import {
  MixpanelCommunityCreationEvent,
  MixpanelCommunityInteractionEvent,
} from '../../shared/analytics/types';

export const trpcRouter = trpc.router({
  createCommunity: trpc.command(Community.CreateCommunity, trpc.Tag.Community, [
    MixpanelCommunityCreationEvent.NEW_COMMUNITY_CREATION,
    (result) => ({
      chainBase: result.community?.base,
      community: result.community?.id,
    }),
  ]),
  updateCommunity: trpc.command(
    Community.UpdateCommunity,
    trpc.Tag.Community,
    async (input, output) => {
      const { directory_page_enabled } = input;
      if (directory_page_enabled === undefined) return undefined;
      // track directory page enabled/disabled events
      const event = directory_page_enabled
        ? MixpanelCommunityInteractionEvent.DIRECTORY_PAGE_ENABLED
        : MixpanelCommunityInteractionEvent.DIRECTORY_PAGE_DISABLED;
      // TODO: @timolegros is this a random selection?
      const dirnode = directory_page_enabled
        ? await models.Community.findOne({
            where: { chain_node_id: output.directory_page_chain_node_id },
          })
        : undefined;
      return [
        event,
        {
          community: output.id,
          isCustomDomain: null,
          communitySelected: dirnode?.id,
        },
      ];
    },
  ),
  getCommunities: trpc.query(Community.GetCommunities, trpc.Tag.Community),
  getCommunity: trpc.query(Community.GetCommunity, trpc.Tag.Community),
  getStake: trpc.query(Community.GetCommunityStake, trpc.Tag.Community),
  getStakeTransaction: trpc.query(
    Community.GetStakeTransaction,
    trpc.Tag.Community,
  ),
  getStakeHistoricalPrice: trpc.query(
    Community.GetStakeHistoricalPrice,
    trpc.Tag.Community,
  ),
  setStake: trpc.command(Community.SetCommunityStake, trpc.Tag.Community),
  createGroup: trpc.command(
    Community.CreateGroup,
    trpc.Tag.Community,
    [
      MixpanelCommunityInteractionEvent.CREATE_GROUP,
      (result) => ({ community: result.id }),
    ],
    async (_, output, ctx) => {
      await command(Community.RefreshCommunityMemberships(), {
        actor: ctx.actor,
        payload: {
          community_id: output.id!,
          group_id: output.groups?.at(0)?.id,
        },
      }).catch(console.error);
    },
  ),
  updateGroup: trpc.command(
    Community.UpdateGroup,
    trpc.Tag.Community,
    [
      MixpanelCommunityInteractionEvent.UPDATE_GROUP,
      (result) => ({ community: result.community_id }),
    ],
    async (input, output, ctx) => {
      // refresh memberships in background if requirements or required requirements updated
      if (input.requirements?.length || input.metadata?.required_requirements)
        await command(Community.RefreshCommunityMemberships(), {
          actor: ctx.actor,
          payload: {
            community_id: output.community_id!,
            group_id: output.id,
          },
        }).catch(console.error);
    },
  ),
  getMembers: trpc.query(Community.GetMembers, trpc.Tag.Community),
  createStakeTransaction: trpc.command(
    Community.CreateStakeTransaction,
    trpc.Tag.Community,
  ),
  refreshCustomDomain: trpc.query(
    Community.RefreshCustomDomain,
    trpc.Tag.Community,
  ),
  updateCustomDomain: trpc.command(
    Community.UpdateCustomDomain,
    trpc.Tag.Community,
  ),
  createTopic: trpc.command(Community.CreateTopic, trpc.Tag.Community, [
    MixpanelCommunityInteractionEvent.CREATE_TOPIC,
    (result) => ({
      community: result.topic.community_id,
      userId: result.user_id,
    }),
  ]),
  updateTopic: trpc.command(Community.UpdateTopic, trpc.Tag.Community, [
    MixpanelCommunityInteractionEvent.UPDATE_TOPIC,
    (result) => ({
      community: result.topic.community_id,
      userId: result.user_id,
    }),
  ]),
  deleteTopic: trpc.command(Community.DeleteTopic, trpc.Tag.Community),
  deleteGroup: trpc.command(Community.DeleteGroup, trpc.Tag.Community),
  deleteCommunity: trpc.command(Community.DeleteCommunity, trpc.Tag.Community),
  refreshCommunityMemberships: trpc.command(
    Community.RefreshCommunityMemberships,
    trpc.Tag.Community,
  ),
});
