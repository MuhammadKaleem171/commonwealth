/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateCommentResponseReactionAddressUserProfileBackgroundImage } from './CreateCommentResponseReactionAddressUserProfileBackgroundImage';
export declare const CreateCommentResponseReactionAddressUserProfile: core.serialization.ObjectSchema<
  serializers.CreateCommentResponseReactionAddressUserProfile.Raw,
  CommonApi.CreateCommentResponseReactionAddressUserProfile
>;
export declare namespace CreateCommentResponseReactionAddressUserProfile {
  interface Raw {
    name?: string | null;
    email?: string | null;
    website?: string | null;
    bio?: string | null;
    avatar_url?: string | null;
    slug?: string | null;
    socials?: string[] | null;
    background_image?: CreateCommentResponseReactionAddressUserProfileBackgroundImage.Raw | null;
  }
}
