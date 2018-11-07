package ca.qc.cgmatane.informatique.devoir_phonegap_2018_vinsey1;

import android.os.Bundle;
import org.apache.cordova.*;
import org.apache.cordova.DroidGap;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");

    }
}