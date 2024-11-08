/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../../api/index';
import * as core from '../../../../core';
import * as serializers from '../../../index';
import { CreateCommentResponseThreadCollaboratorsItemUserProfileBackgroundImage } from './CreateCommentResponseThreadCollaboratorsItemUserProfileBackgroundImage';
export declare const CreateCommentResponseThreadCollaboratorsItemUserProfile: core.serialization.ObjectSchema<
  serializers.CreateCommentResponseThreadCollaboratorsItemUserProfile.Raw,
  CommonApi.CreateCommentResponseThreadCollaboratorsItemUserProfile
>;
export declare namespace CreateCommentResponseThreadCollaboratorsItemUserProfile {
  interface Raw {
    name?: string | null;
    email?: string | null;
    website?: string | null;
    bio?: string | null;
    avatar_url?: string | null;
    slug?: string | null;
    socials?: string[] | null;
    background_image?: CreateCommentResponseThreadCollaboratorsItemUserProfileBackgroundImage.Raw | null;
  }
}
