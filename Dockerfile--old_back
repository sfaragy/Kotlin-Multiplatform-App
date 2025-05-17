FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    curl git unzip zip wget software-properties-common \
    openjdk-17-jdk \
    lib32stdc++6 lib32z1 lib32gcc-s1 \
    nodejs npm \
    clang libssl-dev libicu-dev libbz2-dev zlib1g-dev \
    && apt-get clean

ENV GRADLE_VERSION=8.5
RUN wget https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -P /tmp \
    && unzip -d /opt/gradle /tmp/gradle-${GRADLE_VERSION}-bin.zip \
    && ln -s /opt/gradle/gradle-${GRADLE_VERSION}/bin/gradle /usr/bin/gradle

ENV PATH="${PATH}:/opt/gradle/gradle-${GRADLE_VERSION}/bin"

ENV ANDROID_SDK_ROOT=/opt/android-sdk
RUN mkdir -p ${ANDROID_SDK_ROOT}/cmdline-tools \
    && cd ${ANDROID_SDK_ROOT}/cmdline-tools \
    && wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip -O tools.zip \
    && unzip tools.zip -d temp \
    && mv temp/cmdline-tools ${ANDROID_SDK_ROOT}/cmdline-tools/latest \
    && rm -rf temp tools.zip

ENV PATH="${PATH}:${ANDROID_SDK_ROOT}/cmdline-tools/latest/bin:${ANDROID_SDK_ROOT}/platform-tools"

RUN yes | sdkmanager --licenses || true \
    && sdkmanager "platform-tools" "platforms;android-34" "build-tools;34.0.0" "ndk;25.2.9519653"

WORKDIR /app
CMD [ "bash" ]
