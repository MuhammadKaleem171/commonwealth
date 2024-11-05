/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { GetCommentsResponseResultsItemAddressRole } from './GetCommentsResponseResultsItemAddressRole';
import { GetCommentsResponseResultsItemAddressUser } from './GetCommentsResponseResultsItemAddressUser';
import { GetCommentsResponseResultsItemAddressWalletId } from './GetCommentsResponseResultsItemAddressWalletId';
export declare const GetCommentsResponseResultsItemAddress: core.serialization.ObjectSchema<
  serializers.GetCommentsResponseResultsItemAddress.Raw,
  CommonApi.GetCommentsResponseResultsItemAddress
>;
export declare namespace GetCommentsResponseResultsItemAddress {
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
    wallet_id?: GetCommentsResponseResultsItemAddressWalletId.Raw | null;
    block_info?: string | null;
    is_user_default?: boolean | null;
    role?: GetCommentsResponseResultsItemAddressRole.Raw | null;
    is_banned?: boolean | null;
    hex?: string | null;
    User?: GetCommentsResponseResultsItemAddressUser.Raw | null;
    created_at?: string | null;
    updated_at?: string | null;
  }
}
