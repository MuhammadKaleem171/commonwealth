/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { UpdateCommunityRequestAddressesItemRole } from './UpdateCommunityRequestAddressesItemRole';
import { UpdateCommunityRequestAddressesItemUser } from './UpdateCommunityRequestAddressesItemUser';
import { UpdateCommunityRequestAddressesItemWalletId } from './UpdateCommunityRequestAddressesItemWalletId';

export declare const UpdateCommunityRequestAddressesItem: core.serialization.ObjectSchema<
  serializers.UpdateCommunityRequestAddressesItem.Raw,
  CommonApi.UpdateCommunityRequestAddressesItem
>;
export declare namespace UpdateCommunityRequestAddressesItem {
  interface Raw {
    id?: number | null;
    address: string;
    community_id: string;
    user_id?: number | null;
    verification_token?: string | null;
    verification_token_expires?: string | null;
    verified?: string | null;
    last_active?: string | null;
    ghost_address?: boolean | null;
    wallet_id?: UpdateCommunityRequestAddressesItemWalletId.Raw | null;
    block_info?: string | null;
    is_user_default?: boolean | null;
    role?: UpdateCommunityRequestAddressesItemRole.Raw | null;
    is_banned?: boolean | null;
    hex?: string | null;
    User?: UpdateCommunityRequestAddressesItemUser.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
