package com.simplilearn.dto;

import javax.persistence.FetchType;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.simplilearn.model.Category;

import lombok.Data;

@Data
public class ProductDTO {
	private Long id;
	private String name;
	
	private int CategoryId;
	private double price;
	private double quantity;
	private String description;
	private String imageName;

}
