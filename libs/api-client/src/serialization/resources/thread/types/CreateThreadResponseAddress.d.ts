/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateThreadResponseAddressRole } from './CreateThreadResponseAddressRole';
import { CreateThreadResponseAddressUser } from './CreateThreadResponseAddressUser';
import { CreateThreadResponseAddressWalletId } from './CreateThreadResponseAddressWalletId';
export declare const CreateThreadResponseAddress: core.serialization.ObjectSchema<
  serializers.CreateThreadResponseAddress.Raw,
  CommonApi.CreateThreadResponseAddress
>;
export declare namespace CreateThreadResponseAddress {
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
    wallet_id?: CreateThreadResponseAddressWalletId.Raw | null;
    block_info?: string | null;
    is_user_default?: boolean | null;
    role?: CreateThreadResponseAddressRole.Raw | null;
    is_banned?: boolean | null;
    hex?: string | null;
    User?: CreateThreadResponseAddressUser.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
