// @ts-check
import React from "react";
import { colors, media, fonts } from "../data/theme";

/**
 * Returns an object to correspond variants with price
 * @param {Array} variants
 * @param {Array} price
 */
const getVariants = (variants, price) => {
  let newVariants = {};

  // Create new object from two arrays: variants and price
  // Also removes the first space
  newVariants = variants.map((name, index) => {
    return {
      name: name.replace(/\s/, ""),
      price: parseInt(price[index].replace(/\s/, ""), 10)
    };
  });

  return newVariants;
};

const MenuItem = props => {
  const { data } = props;
  const variants = getVariants(
    data.gsx$variants.$t.split(","),
    data.gsx$price.$t.split(",")
  );

  return (
    <div className="menu-item">
      <div className="menu-item-container">
        {data.gsx$flags.$t !== "" ? (
          <div className="menu-item-flags">
            <span className="menu-item-flags-name">{data.gsx$flags.$t}</span>
          </div>
        ) : (
          ""
        )}

        <h4>{data.gsx$menu.$t}</h4>

        {variants.map((variant, index) => (
          <div className="variants-section" key={index}>
            <h5 className="variants-name">— {variant.name}</h5>
            <p className="variants-price">{variant.price}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .menu-item {
          width: 45%;
          margin-bottom: 24px;
        }

        .menu-item-container {
          padding: 16px;
        }

        .menu-item-flags {
          padding-bottom: 8px;
        }

        .menu-item-flags-name {
          font-size: 12px;
          font-weight: ${fonts.nunito900};
          color: ${colors["Angy Red"]};
          text-transform: uppercase;

          padding: 2px 8px;
          border-radius: 8px;
          background-color: ${colors["Just Blue"]};
        }

        .menu-item h4 {
          font-family: ${fonts.nunito};
          font-size: 24px;
          font-weight: ${fonts.nunito900};
          line-height: 1.4;
          text-transform: uppercase;
        }

        .variants-section {
          display: flex;
          justify-content: space-between;
          line-height: 1.4;
        }

        .variants-section .variants-name {
          font-family: ${fonts.nunito};
          font-size: 24px;
        }

        .variants-section .variants-price {
          font-size: 24px;
          font-weight: ${fonts.nunito900};
        }

        @media (max-width: ${media.sm}) {
          .menu-item {
            width: 100%;
          }

          .menu-item-container {
            padding: 0 0 32px 0;
          }

          .menu-item-container {
            padding: 0 0 24px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuItem;
