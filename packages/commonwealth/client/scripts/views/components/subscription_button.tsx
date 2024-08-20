import { CommunityAlert } from '@hicommonwealth/schemas';
import React, { useState } from 'react';
import app from 'state';
import { useCreateCommunityAlertMutation } from 'state/api/trpc/subscription/useCreateCommunityAlertMutation';
import { useDeleteCommunityAlertMutation } from 'state/api/trpc/subscription/useDeleteCommunityAlertMutation';
import { CWButton } from 'views/components/component_kit/new_designs/CWButton';
import { z } from 'zod';
import { useUserStore } from '../../state/ui/user/user';

export const SubscriptionButton = ({
  communityAlerts,
}: {
  communityAlerts: ReadonlyArray<z.infer<typeof CommunityAlert>> | undefined;
}) => {
  const user = useUserStore();
  const existingAlert = communityAlerts?.some(
    (a) => a.community_id === app.activeChainId(),
  );
  const [notificationsOn, setNotificationsOn] = useState<boolean>(
    existingAlert || false,
  );

  const deleteCommunityAlert = useDeleteCommunityAlertMutation();
  const createCommunityAlert = useCreateCommunityAlertMutation();

  return (
    <CWButton
      buttonHeight="sm"
      onClick={(e) => {
        e.preventDefault();
        if (notificationsOn) {
          deleteCommunityAlert
            .mutateAsync({
              id: user.id,
              community_ids: [app.activeChainId()],
            })
            .then(() => {
              setNotificationsOn(false);
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          createCommunityAlert
            .mutateAsync({
              id: user.id,
              community_id: app.activeChainId(),
            })
            .then(() => {
              setNotificationsOn(true);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }}
      label={notificationsOn ? 'Notifications on' : 'Notifications off'}
      buttonType={notificationsOn ? 'primary' : 'secondary'}
    />
  );
};
