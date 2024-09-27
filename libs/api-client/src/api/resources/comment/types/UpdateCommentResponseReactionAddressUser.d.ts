/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as CommonApi from '../../../index';

export interface UpdateCommentResponseReactionAddressUser {
  id?: number;
  email?: string;
  isAdmin?: boolean;
  disableRichText?: boolean;
  emailVerified?: boolean;
  selectedCommunityId?: string;
  emailNotificationInterval?: CommonApi.UpdateCommentResponseReactionAddressUserEmailNotificationInterval;
  promotionalEmailsEnabled?: boolean;
  isWelcomeOnboardFlowComplete?: boolean;
  profile: CommonApi.UpdateCommentResponseReactionAddressUserProfile;
  profileTags?: CommonApi.UpdateCommentResponseReactionAddressUserProfileTagsItem[];
  createdAt?: Date;
  updatedAt?: Date;
}
