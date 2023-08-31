// ... (import statements and other code) ...

const Latest = () => {
  const [flippedIndex, setFlippedIndex] = useState(-1);
  const [hoveredBagIcon, setHoveredBagIcon] = useState(-1);

  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? -1 : index);
  };

  // ... (rest of the code) ...

  return (
    <>
      {/* ... (other JSX) ... */}
      {images.map((image, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={4}
          md={2}
          style={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <div
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => setHoveredBagIcon(index)}
            onMouseLeave={() => setHoveredBagIcon(-1)}
            style={{
              transform: flippedIndex === index ? "rotateY(180deg)" : "none",
              transformStyle: "preserve-3d",
              transition: "transform 0.5s ease",
            }}
          >
            <Card style={cardStyle}>
              <div
                style={{
                  transform: "rotateY(0deg)",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <CardMedia component="img" height="400" image={image} />
                <CardContent>
                  <Typography variant="subtitle2" style={itemNameStyle}>
                    {itemNames[index]}
                  </Typography>
                  <Typography variant="body2" style={itemPriceStyle}>
                    {prices[index]}
                  </Typography>
                </CardContent>
              </div>

              <div
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Content for the back side of the card */}
                {/* You can add additional information or actions */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} style={{ fontSize: "24px" }} />
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    style={{ fontSize: "24px" }}
                  />
                  {hoveredBagIcon === index && (
                    <span
                      style={{
                        fontSize: "10px",
                        textAlign: "center",
                      }}
                    >
                      ADD TO BAG
                    </span>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </Grid>
      ))}
      {/* ... (other JSX) ... */}
    </>
  );
};

export default Latest;
