package com.simplilearn.model;

import lombok.Data;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
@Data
public class Product {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private Long id;
private String name;
@ManyToOne(fetch=FetchType.LAZY)
@JoinColumn(name="category_id",referencedColumnName="category_id")
private Category category;
private double price;
private double quantity;
private String description;
private String imageName;

}
