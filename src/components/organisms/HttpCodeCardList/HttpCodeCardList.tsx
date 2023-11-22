import { FC, Fragment, useMemo } from "react";
import styles from "./HttpCodeCardList.module.css";
import { HttpCodeListItem } from "../../../services/declarations";
import { groupBy } from "../../../utils";
import { HttpCodeCardSection } from "../HttpCodeCardSection";

interface HttpCodeCardListProps {
    list: Array<HttpCodeListItem>;
}

export const HttpCodeCardList: FC<HttpCodeCardListProps> = (props) => {
    const { list } = props;

    const groupedList = useMemo(() => {
        if (!list) {
            return null;
        }

        return groupBy<HttpCodeListItem>(list, (item) => item.type);
    }, [Boolean(list)]);

    return (
        <article className={styles.listContainer}>
            { !groupedList && (
                <div className={styles.noItemsLable}>
                    The list is empty
                </div>
            ) }

            { groupedList!.map((item) => (
                <Fragment key={item.type}>
                    <HttpCodeCardSection
                        codeType={item.type}
                        list={item.data}
                    />
                </Fragment>
            )) }
        </article>
    );
};
