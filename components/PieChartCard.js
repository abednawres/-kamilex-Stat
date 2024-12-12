// PieChartCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Text as SvgText } from 'react-native-svg';

const PieChartCard = ({ title, data, titleColor }) => {
  if (!data) {
    return (
      <View style={styles.cardContainer}>
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
        <Text>No data available</Text>
      </View>
    );
  }

  const radius = 40;
  const innerRadius = radius * 0.9; // Ajustez cette valeur pour changer l'épaisseur de la pie chart
  const center = radius;
  const total = data.reduce((sum, item) => sum + item.value, 0);

  let startAngle = 0;
  const slices = data.map((item, index) => {
    const endAngle = startAngle + (item.value / total) * 360;
    const startOuter = polarToCartesian(center, center, radius, endAngle);
    const endOuter = polarToCartesian(center, center, radius, startAngle);
    const startInner = polarToCartesian(center, center, innerRadius, endAngle);
    const endInner = polarToCartesian(center, center, innerRadius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    const d = [
      `M ${startOuter.x} ${startOuter.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
      `L ${endInner.x} ${endInner.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${startInner.x} ${startInner.y}`,
      `L ${startOuter.x} ${startOuter.y}`,
    ].join(' ');

    startAngle = endAngle;

    return {
      color: item.color,
      d,
      value: item.value,
    };
  });

  // Prendre la première valeur pour l'afficher dans le cercle
  const mainValue = data[0].value;
  const mainColor = data[0].color;

  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Svg width={radius * 2} height={radius * 2}>
        {slices.map((slice, index) => (
          <Path key={index} d={slice.d} fill={slice.color} />
        ))}
        <SvgText
          x={center}
          y={center}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize="24"
          fontWeight="bold"
          fill={mainColor}
        >
          {`${mainValue}%`}
        </SvgText>
      </Svg>
    </View>
  );
};

const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2, // elevation de shadow
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default PieChartCard;