    <Card>
      <CardHeader className="flex-row">
        <View className="flex-1 items-start">
          <CardTitle className="font-light">Currently {formatTime(currentTime)}</CardTitle>
        </View>
        <View className="flex-1 items-end">
          <View className="flex-row gap-2">
            {statusDisplay}
            <Badge className={day ? `bg-yellow-300` : `bg-cyan-900`}>
              <Text className={day ? `text-black` : `text-white`}>
                {day ? "Day" : "Night"}
              </Text>
            </Badge>
          </View>
        </View>
      </CardHeader>

      <CardContent>
        <View className="flex-row justify-between gap-2">
          <View className="flex-1 items-start">
            <Text variant={"small"} className="text-muted-foreground font-light">
              Last Action
            </Text>
          </View>
          <View className="flex-1 items-end">
            <Text className="font-semibold">
              {currentSession.timeIn
                ? formatTime(currentSession.timeIn)
                : formatTime(currentSession.timeOut)}
              {currentSession.status == "in" ? " Time In" : " Time Out"}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between gap-2 mb-3">
          <View className="flex-1 items-start">
            <Text variant={"small"} className="text-muted-foreground font-light">
              Today
            </Text>
          </View>

          <View className="flex-1 items-end">
            <Text className="font-semibold">
              {hours}hr {minutes}mins on shift
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between gap-2">
          <View className="flex-1">
            <Button
              className="rounded-full border-border-two"
              onPress={clockIn}
              size={"lg"}
              variant={"outline"}
            >
              <Icon as={LogIn} color={isDark ? "white" : "black"} />
              <Text className={isDark ? "text-white" : "text-black"}>
                Time In
              </Text>
            </Button>
          </View>
          <View className="flex-1">
            <Button
              className="rounded-full"
              onPress={clockOut}
              size={"lg"}
              variant={"outline"}
            >
              <Icon as={LogOut} color={isDark ? "white" : "black"} />
              <Text className={isDark ? "text-white" : "text-black"}>
                Time Out
              </Text>
            </Button>
          </View>
        </View>
      </CardContent>
    </Card>