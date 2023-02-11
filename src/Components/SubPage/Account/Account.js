import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="account">
      <h1 className="account__summary">ACCOUNT SUMMARY</h1>
      <table className="account__table">
        <tbody className="account__table">
          <tr>
            <td className="column__left">Available Funds for Trading:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Cash & Sweep Vehicle:</td>
            <td className="column__right">$10,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Cash Balance:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Equity Commissions & Fees YTD:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Equity Percentage:</td>
            <td className="column__right">100%</td>
          </tr>
          <tr>
            <td className="column__left">Long Marginal Value:</td>
            <td className="column__right">$250,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Long Stock Value:</td>
            <td className="column__right">$250,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Maintenance Requirement:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Margin Balance:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Margin Equity:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Net Liquidating Value:</td>
            <td className="column__right">$300,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Option Buying Power:</td>
            <td className="column__right">$50,000.00</td>
          </tr>
          <tr>
            <td className="column__left">Short Balance:</td>
            <td className="column__right">-</td>
          </tr>
          <tr>
            <td className="column__left">Short Marginable Value:</td>
            <td className="column__right">$0.00</td>
          </tr>
          <tr>
            <td className="column__left">Stock Buying Power:</td>
            <td className="column__right">$50,000.00</td>
          </tr>

          <tr>
            <td className="column__left">Total Commissions & Fees YTD:</td>
            <td className="column__right">$0.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Account;
