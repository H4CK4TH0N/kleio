"use client"

import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import type { DecisionTree } from '@/types';

type DecisionTreeProps = {
  decisionTree: DecisionTree;
};

export function DecisionTree({ decisionTree }: DecisionTreeProps) {
  const svgRef = useRef(null);

  useEffect(() => {
    const { rootNode, nodes } = decisionTree;
    const data = nodes[rootNode];

    // Create a hierarchical structure
    const root = d3.hierarchy(data, (d) => d.children.map((id) => nodes[id]));

    // Set dimensions and margins for the SVG
    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 90, bottom: 30, left: 90 };

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("preserveAspectRatio", "xMinYMin meet");

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const treeLayout = d3.tree().size([width - margin.left - margin.right, height - margin.top - margin.bottom]);

    treeLayout(root as d3.HierarchyNode<unknown>);

    // Add links (edges)
    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      // .attr("d", d3.linkHorizontal()
      //   .x(d => d.y)
      //   .y(d => d.x));

    // Add nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.y},${d.x})`);

    node.append("circle")
      .attr("r", 5);

    node.append("text")
      .attr("dy", ".35em")
      .attr("x", d => d.children ? -10 : 10)
      .style("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.description);

  }, [decisionTree]);

  return (
    <svg ref={svgRef}></svg>
  );
};
