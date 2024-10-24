/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
export declare const JoinCommunityResponseBase: core.serialization.Schema<
  serializers.JoinCommunityResponseBase.Raw,
  CommonApi.JoinCommunityResponseBase
>;
export declare namespace JoinCommunityResponseBase {
  type Raw = 'cosmos' | 'substrate' | 'ethereum' | 'near' | 'solana';
}
