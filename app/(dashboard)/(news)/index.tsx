import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { AntDesign } from "@expo/vector-icons";
import { modernColors, news } from "@/Container/Data";

const index = () => {
  const [randomColor, setRandomColor] = useState<number>(0);
  const [feeds, setFeeds] = useState<any>([]);

  const swiped = () => {
    let random = Math.floor(Math.random() * modernColors.length);
    setRandomColor(random);
  };

  const outOfFrame = () => {
    console.log("left the screen!");
  };

  const styles = StyleSheet.create({
    cardContainer: {
      width: "90%",
      maxWidth: 260,
      backgroundColor: "red",
      height: 300,
    },
    card: {
      position: "absolute",
      backgroundColor: `${modernColors[randomColor]}`,
      width: "90%",
      height: 500,
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 20,
      borderRadius: 20,
      resizeMode: "cover",
    },
  });

  return (
    <View
      style={{
        backgroundColor: "black",
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          position: "relative",
          top: 50,
          bottom: 50,
          left: 20,
          right: 40,
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <>
          {news.feed.map((feed: any, index: number) => (
            <TinderCard
              key={index}
              onSwipe={(feed) => swiped()}
              onCardLeftScreen={() => outOfFrame()}
            >
              <View style={styles.card}>
                <View
                  style={{
                    paddingHorizontal: 30,
                    paddingVertical: 30,
                  }}
                >
                  <Text
                    adjustsFontSizeToFit={true}
                    ellipsizeMode={"tail"}
                    numberOfLines={4}
                    style={{
                      color: "black",
                      fontSize: 20,
                      fontWeight: "600",
                    }}
                  >
                    {feed.title}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      marginVertical: 10,
                    }}
                  >
                    {feed.topics.map((topic: any, index: number) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: "rgba(0,0,0,0.2)",
                          paddingHorizontal: 10,
                          paddingVertical: 8,
                          borderRadius: 50,
                          marginRight: 5,
                          marginBottom: 5,
                        }}
                      >
                        <Text
                          adjustsFontSizeToFit={true}
                          ellipsizeMode={"tail"}
                          numberOfLines={2}
                          style={{
                            fontSize: 12,
                          }}
                        >
                          {topic.topic}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <Text
                    adjustsFontSizeToFit={true}
                    ellipsizeMode={"tail"}
                    numberOfLines={9}
                    style={{
                      color: "black",
                      fontSize: 17,
                      marginTop: 8,
                    }}
                  >
                    {feed.summary}
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50,
                        backgroundColor: "black",
                        shadowColor: "black",
                        shadowOpacity: 0.2,
                        shadowRadius: 20,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 10,
                      }}
                    >
                      <AntDesign name="arrowright" size={24} color="white" />
                    </View>
                  </View>
                </View>
              </View>
            </TinderCard>
          ))}
        </>
      </View>
    </View>
  );
};

export default index;
