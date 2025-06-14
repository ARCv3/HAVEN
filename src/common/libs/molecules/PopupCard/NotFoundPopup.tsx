import type { FC } from "react";
import PopupCard from "./PopupCard.js";
import { ErrorOutline } from "@mui/icons-material";

export interface NotFoundPopupProps {

}

const NotFoundPopup : FC<NotFoundPopupProps> = ({}:  NotFoundPopupProps) => {
    return <PopupCard icon={<ErrorOutline className="align-middle" />} title="404" subtitle="The page you're looking for doesn't exist or may have been moved." />
}

export default NotFoundPopup;