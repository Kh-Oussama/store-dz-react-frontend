import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import Menu_2 from "../../assets/img/catherina-schurmann-Vfi3VqibnIA-unsplash.jpg";
import Menu_1 from "../../assets/img/brandi-ibrao-V0AsZi4IMAw-unsplash.jpg";
import Menu_3 from "../../assets/img/andrea-rico-4As6kaSrabk-unsplash.jpg";
import Menu_4 from "../../assets/img/ellieelien-HWqsW7FLWf4-unsplash.jpg";
import Menu_5 from "../../assets/img/ahmet-hamdi-tj7Ftdf3JQM-unsplash.jpg";

const CollectionsOverview = () => {
        return (
            <div className="directory-menu">
                <div className="directory-menu__1">
                    <MenuItem imageUrl={Menu_1} title={"ACCESSORIES"}/>
                    <MenuItem imageUrl={Menu_2} title={"Rugs"}/>
                </div>
                <div className="directory-menu__2">
                    <MenuItem imageUrl={Menu_3} title={"WALL DECOR"}/>
                    <MenuItem imageUrl={Menu_4} title={"candles"}/>
                    <MenuItem imageUrl={Menu_5} title={"CLOCKS"}/>
                </div>

            </div>
        )
};


export default CollectionsOverview;
