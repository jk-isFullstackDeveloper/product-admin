import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
  Badge,
} from "reactstrap";

const index = () => {
  const [product, setAllProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  console.log(product);
  return (
    <>
      <Row className="bg-white  p-2">
        {product &&
          product.products.map((items) => {
            return (
              <Col sm="6" lg="6" xl="3" className="  py-4 bg-success">
                <Card key={items.id} className="bg-light shadow">
                  <CardBody className="p-4">
                    <img
                      width={"100%"}
                      src={items.thumbnail}
                      className="mb-3"
                    />
                    <CardTitle tag="h4">{items.title}</CardTitle>

                    <CardSubtitle>
                      <Badge className="mb-2">Brand:-{items.brand}</Badge>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge className="mb-2 bg-info">
                        Category:-{items.category}
                      </Badge>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge className="bg-danger mb-2">
                        Price:-{items.price}
                      </Badge>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge className="bg-warning mb-2">
                        Rating:-{items.rating}
                      </Badge>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge className="bg-dark mb-2">
                        stack:-{items.stock}
                      </Badge>
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge className="bg-primary">
                        DiscountPercentage:-{items.discountPercentage} %
                      </Badge>
                    </CardSubtitle>
                    <CardText className="mt-3">{items.description}</CardText>

                    <Button className={"bg-success border-none shadow-none"}>
                      Add to Cart
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default index;
