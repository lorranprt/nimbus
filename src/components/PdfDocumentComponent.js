// PdfDocumentComponent.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet as PdfStyleSheet } from '@react-pdf/renderer';
import { Bar } from 'react-chartjs-2';

const PdfDocumentComponent = ({ data, chartData }) => (
  <Document>
    <Page size="A4" style={PdfStyleSheet.page}>
      <View style={PdfStyleSheet.section}>
        <Text>Data Table</Text>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {Object.values(row).map((value) => (
                  <td key={value}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </View>
      <View style={PdfStyleSheet.section}>
        <Text>Bar Chart</Text>
        <Bar data={chartData} />
      </View>
    </Page>
  </Document>
);

export default PdfDocumentComponent;
