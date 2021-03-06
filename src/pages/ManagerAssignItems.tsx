import { Box, Button } from "@mui/material";
import { IconButton } from "components/atoms/IconButton";
import { AssignTableBody } from "components/molecules/AssignTableBody";
import PageTabs from "components/molecules/PageTabs/PageTabs";
import { useManagerPageTabs } from "hooks/useManagerPageTabs";
import BodyLayout from "layouts/BodyLayout";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import useTranslate from "hooks/useTranslate";
import { commonStyles } from "styles/mui/commonStyles";

interface ManagerAssignItemsProps {}

const ManagerAssignItems: React.FC<ManagerAssignItemsProps> = () => {
  const t = useTranslate();
  const pageTabProps = useManagerPageTabs();
  const history = useHistory();

  const showCreateReservation = () => {
    history.push("/manager/assign/reservation");
  };

  return (
    <BodyLayout>
      <PageTabs {...pageTabProps} />
      <Box sx={commonStyles.buttonContainer}>
        <Button variant="contained" disableElevation onClick={showCreateReservation}>
          {t("reservation.createReservationButton")}
        </Button>
      </Box>
      <AssignTableBody />
    </BodyLayout>
  );
};

export default ManagerAssignItems;
