# Schema Analysis for Decap CMS Alignment

This document outlines the schema requirements extracted from `src/content.config.ts`.

## Categories
- `draft`: Boolean (Optional)
- `title`: String (Required)
- `description`: String (Required)
- `icon`: String (Required)
- `image`: Image (Required)

## Collaborations
- `draft`: Boolean (Optional)
- `title`: String (Required)
- `description`: String (Optional)
- `pubDate`: Date (Optional)
- `image`: Image (Optional)

## Pages
- `draft`: Boolean (Optional)
- `menutitle`: String (Optional)
- `title`: String (Required)
- `description`: String (Optional)
- `pubDate`: Date (Optional)
- `image`: Image (Optional)
- `icon`: String (Optional)
- `order`: Number (Optional)

## Partner
- `draft`: Boolean (Optional)
- `title`: String (Required)
- `description`: String (Required)
- `link`: URL (Optional)
- `image`: Image (Required)
- `images`: Array[Image] (Optional)
- `categories`: Array[Reference('categories')] (Required)
- `cuisine`: Array[String] (Optional)
- `region`: Reference('region') (Required)
- `address`: String (Optional)
- `coordinates`: Object (Optional)
    - `lat`: Number (Required if object exists)
    - `lng`: Number (Required if object exists)
- `discount_pct`: Number (Optional)
- `discount_text`: String (Optional)
- `comment`: String (Optional)

## Region
- `draft`: Boolean (Optional)
- `title`: String (Required)
- `description`: String (Optional)
- `country`: Reference('region') (Optional)
- `icon`: String (Required)
- `image`: Image (Required)
