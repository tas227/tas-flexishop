.left-column {
  float: left;
  width: 25%;
  background: #d4edda; /* vert clair */
  padding: 10px;
  box-sizing: border-box;
  min-height: 300px;
  border-right: 2px solid #6c9f60;
}

.category-header {
  background: #6c9f60; /* vert plus foncé */
  color: white;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 4px;
}

.left-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.left-column ul li {
  margin-bottom: 10px;
}

.left-column ul li button {
  width: 100%;
  padding: 8px;
  background: white;
  border: 1px solid #6c9f60;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.left-column ul li button:hover {
  background: #6c9f60;
  color: white;
}

.right-column {
  margin-left: 26%;
  padding: 10px;
  box-sizing: border-box;
}

.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.product-item img {
  border-radius: 6px;
}

.product-item div {
  flex: 1;
}

.product-item label {
  font-weight: bold;
}
