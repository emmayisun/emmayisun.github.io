---
layout: post
title: 01/16/2024 Waller's Brookings Interview with David Wiesel
subtitle: Almost as Good as It Gets…But Will It Last?
categories: Fedspeak
tags: [cut, Waller]
article_excerpt: "test"
---

<!-- Div where the player will be placed -->
<div id="player"></div>

<!-- Load the IFrame Player API code asynchronously -->
<script src="https://www.youtube.com/iframe_api"></script>

<script>
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '360',
      width: '640',
      videoId: '2OmfIeGtL1w'
    });
  }
</script>

document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('player');
    let isPip = false;

    window.addEventListener('scroll', () => {
        const videoPosition = videoElement.getBoundingClientRect();
        if ((videoPosition.top < window.innerHeight && videoPosition.bottom >= 0) && !isPip) {
            videoElement.classList.remove('pip-video');
            isPip = false;
        } else if (!isPip) {
            videoElement.classList.add('pip-video');
            isPip = true;
        }
    });
});



### Headline

Fed's Waller: Changes in policy path must be carefully calibrated, not rushed  
Fed's Waller: We are close but I will need more information in coming months to be sure  
Fed's Waller: I view risks to Fed's employment and inflation mandates as more closely balanced  
Fed's Waller: I believe policy is set properly  
Fed's Waller: The Fed will be able to cut the policy rate this year as long as inflation doesn't rebound or stay high  
Fed's Waller: Data in last few months is allowing fed to consider cutting policy rate in 2024  
Fed's Waller: My view is consistent with Fed policymaker projections for three 25-bps rate cuts in 2024  
Fed's Waller: The December jobs report was largely noise  
Fed's Waller: The setting of policy needs to proceed with more caution to avoid over-tightening  
Fed's Waller: Financial conditions remain restrictive  
Fed's Waller: The timing and actual number of cuts will depend on incoming data  
Fed's Waller: Rate cuts should be done methodically and carefully, there's no reason to cut as quickly as in the past  
Fed's Waller: Economic activity has moderated  
Fed's Waller: The slowdown in consumer spending appears tentative, will find out more from Wednesday's retail sales data  
Fed's Waller: I am more confident we are within striking distance of achieving sustainable 2% inflation  
Fed's Waller: Ongoing moderation in labor market supports progress toward 2% inflation  
Fed's Waller: A strong economy gives fed the flexibility to move methodically on cuts  
Fed's Waller: 4% wage growth is a little high, but not by much  
Fed's Waller: Shipping does not need to go through the Red Sea, it could require some one time level impacts on costs, but not on underlying inflation  
Fed's Waller: It is reasonable to consider slowing the asset runoff this year  
Fed's Waller: Once the Fed decides to cut, we can take our time with the pace  
Fed's Waller: Once supply adjustment is complete will be clearer whether demand is falling enough to finish the inflation fight. An issue the Fed needs to watch  
Fed's Waller: rent inflation is expected to come down, it is just taking longer for new leases to flow through to the inflation index  
Fed's Waller: If we think need to move rate down faster, we can  

### Link
[Speech](https://www.federalreserve.gov/newsevents/speech/waller20240116a.htm) || [BBG](https://www.bloomberg.com/news/articles/2024-01-16/waller-says-fed-can-cut-rates-this-year-absent-inflation-rebound)
### Speech
Thank you, David Wessel, and thank you to Brookings for the opportunity to speak to you today.

In the second half of 2023, I gave a series of speeches about the apparent conflict between the strength of economic activity in the third quarter and continued progress toward the Federal Open Market Committee's (FOMC) 2 percent inflation goal.[^1]<a id="f1"></a> I said then that "something's got to give"—either activity needs to moderate, or progress on lowering inflation is going to stop. By late November, the latest economic data left me encouraged that there were signs of moderating economic activity in the fourth quarter, but inflation was still too high.

As of today, the data has come in even better. Real gross domestic product (GDP) is expected to have grown between 1 and 2 percent in the fourth quarter, unemployment is still below 4 percent, and core personal consumption expenditure (PCE) inflation has been running close to 2 percent for the last 6 months. For a macroeconomist, this is almost as good as it gets.

But will it last? Time will tell whether inflation can be sustained on its recent path and allow us to conclude that we have achieved the FOMC's price-stability goal. Time will tell if this can happen while the labor market still performs above expectations. The data we have received the last few months is allowing the Committee to consider cutting the policy rate in 2024. However, concerns about the sustainability of these data trends requires changes in the path of policy to be carefully calibrated and not rushed. In the end, I am feeling more confident that the economy can continue along its current trajectory.

Let me start with the data on economic activity that has brought me to this view, and then I'll talk about the labor market, financial conditions, and inflation. I'll conclude with what I think the implications are from all that for monetary policy.

First, economic activity has moderated. After averaging an annualized 3 percent over the first three quarters of 2023, and 5 percent in the third quarter, growth in real GDP appears to have slowed appreciably in the fourth quarter. The average of private-sector forecasts summarized by the Blue Chip survey estimates that real GDP grew 1.5 percent in the final three months of 2023. The Atlanta Fed's GDP Now model, based on data in hand, currently stands at 2.2 percent. An important part of that moderation comes from business investment and government spending, both of which showed rapid growth earlier in 2023 that didn't appear sustainable. Consumer spending also accounted for much of the surprising strength in GDP growth earlier in the year, but here the slowdown so far appears more tentative. Factors such as high interest rates, a depletion of excess savings, and a pickup in credit card usage all portend slower growth ahead, but it is unclear how much of that slowing has already occurred. Since consumer spending accounts for more than two-thirds of GDP, this component of demand is obviously critical for the outlook. We'll find out more about consumer spending tomorrow from the report on December's retail sales.

Turning to the labor market, over the course of 2023, there have been increases in labor supply amid slowing demand for labor, and I expect this to continue to bring the labor market into better balance. Some have seen the latest jobs report as in conflict with this story, so let me explain why I don't see it that way. The short version is that I see the surprises in the December jobs report as largely noise against a trend of ongoing moderation that supports progress toward 2 percent inflation.

The unemployment rate in December held steady at 3.7 percent while employers added 216,000 jobs, which was more than expected and an increase from the 173,000 created in November and 105,000 in October. While that looks like a modest acceleration in job creation, I remind myself that revisions to monthly payrolls have been downward for most of 2023—from the first to the third estimate employment gains were revised down in 9 of 10 job reports. Given this recent history of revisions, there is a good chance December will be revised down. Furthermore, with growth expectations moderating over coming quarters, employment gains are likely to slow. We can see that this is already happening if we look at progress over the previous quarters. Average monthly payroll gains over the fourth quarter were 165,000, a step down from the 221,000 average in the third quarter and 257,000 in the first half of 2023. This data shows an improving balance between labor supply and demand.

Likewise, an uptick in wage growth last month should be viewed over a longer time horizon. Average hourly earnings rose 0.4 percent in December, as they did in November, and the 3- and 12-month increases ticked up. But over the course of the fourth quarter, wages rose less than they did in the third quarter, and over the past several quarters I see a moderation in wage increases across various measures of labor compensation that I expect will be consistent with ongoing progress toward 2 percent inflation. And, though there was a drop in labor force participation in December, the fourth-quarter average is higher than it was in 2022. These are all signs that the labor market continues to come into better balance.

Meanwhile, data on job openings indicates ongoing moderation in labor demand. Job openings played a prominent role in my thinking over the last two years about how restrictive monetary policy aimed at bringing down inflation will impact labor demand and unemployment. One can think of total labor demand as being the sum of the number of workers employed and the number of workers that firms want to hire. The latter is best measured by posted job vacancies. If labor demand declines, the question is: Will employment bear the brunt of the reduction in demand or will vacancies absorb the impact? Traditional Phillips curve analysis assumes that employment would bear the brunt and as a result, unemployment would rise significantly from a tightening of monetary policy. History has shown that this is not an unreasonable assumption, particularly when the job vacancy rate is below 4.5 percent.

But in the spring of 2022, the vacancy rate peaked around 7.5 percent with nearly 12 million job vacancies, and there were still about 6 million unemployed workers. It just seemed counterintuitive to me that with that many job openings and so few people looking for work that the first thing a firm would do when labor demand softened would be to lay off workers. My economic instinct was that this time things would be different and that vacancies would absorb the decline in labor demand, while employment and unemployment changed relatively little.

But instinct isn't enough sometimes. One needs an economic model to verify your instinct and good data analysis is needed to quantify the theoretical impact. This is what I provided in a speech I gave in May 2022, with the help of Andrew Figura.[^2]<a id="f2"></a> In that speech we described a textbook labor search model to derive a Beveridge curve, which is a theoretical relationship between job vacancies and the unemployment rate.[^3]<a id="f3"></a> To quantify the effects of restrictive monetary policy on unemployment, we used standard empirical methods to calibrate the theoretical model. We showed that if restrictive monetary policy could lower the vacancy rate from 7.5 percent to 4.5 percent via a significant decline in job vacancies, there would be a relatively small increase in the unemployment rate—from 3.7 percent to 4.2 percent. Based on this analysis, we argued that, as long as the involuntary job-separation rate did not rise, restrictive monetary policy would allow the FOMC to bring inflation down without a significant increase in the unemployment rate. This seemed like a very plausible assumption given the incredibly high vacancy rate and dearth of workers looking for jobs. Our predictions contradicted standard Phillips curve analysis and historical precedent, but we were in unprecedented times in 2022.

It has been nearly two years since I gave that speech. How has our prediction faired? Data received since then have supported our argument. Since March 2022, the FOMC raised the policy rate over 500 basis points and core PCE inflation has fallen substantially, especially when measured over the past six months. During this dramatic tightening of policy, the job vacancy rate fell from around 7.5 percent to 5.3 percent, which brought the ratio of job vacancies to the number of unemployed people to a touch below 1.4—down from the peak of 2 and not far from the pre-pandemic level of 1.2. The involuntary job-separation rate has remained essentially unchanged at 1 percent since April 2022. Meanwhile the unemployment rate, while bouncing around a bit, is the same as it was in March 2022, 3.7 percent, which is lower than we predicted.

Now, we argued that this couldn't go on forever. We showed in our research that if the vacancy rate continued to fall below 4.5 percent there would be a significant increase in the unemployment rate. So, from now on, the setting of policy needs to proceed with more caution to avoid over-tightening. But to me, this episode shows that good theory combined with good data analysis can lead to good policy outcomes, even if the predictions challenge conventional wisdom.

Moving on from the labor market, another important factor affecting economic activity and progress toward the FOMC's economic objectives is financial conditions, and I wanted to give my view of where they stand. There has been a lot of focus on tightening financial conditions in the fall and then easing of conditions more recently. My view continues to be that, on net, financial conditions remain restrictive and continue to have the desired effect of being a drag on economic activity to put downward pressure on inflation.

Recall that the 10-year Treasury yield peaked in mid-October around 5 percent at the time of the jump up in measured economic activity in the third quarter and shortly after a strong jobs report for September. At that point, FOMC participants still expected another rate hike in 2023. But then the data started cooling off, the FOMC's December Summary of Economic Projections indicated no more hikes, and the 10-year Treasury yield fell to around 4 percent, which is roughly where it was just after the FOMC's last rate hike in July. Remember that in July the widespread view was that financial conditions were pretty tight. I consider this to still be true today, and that judgment is supported by current readings of financial conditions indexes, which capture a broader set of financial variables.[^4]<a id="f4"></a>

So let's talk about what the data on economic activity, the labor market and financial conditions mean for progress toward 2 percent inflation. The backdrop is that we made a lot of progress on inflation in 2023. The 12-month percent change in total PCE inflation, the FOMC's preferred measure for our target, fell from 5.3 percent in January to 2.6 percent in November, the latest month of data. Factoring out volatile energy and food prices, core inflation is a better guide to where inflation is going, and core PCE inflation fell from 5 percent in January to 3.2 percent in November. With inflation declining over the course of the year, I like to look at 3- and 6-month measures to have a better understanding of the current level of inflation. As I noted earlier, the 6-month change in core inflation has been hovering close to a 2 percent annual rate, as has the 3-month measure.

Data on inflation for December was released last week for the consumer price index (CPI) and producer price index. CPI inflation for both total and core rose 0.3 percent for the month. Producer price index (PPI) inflation numbers reported a continued decline in those prices. Some of the PPI data feed into December PCE inflation, and private sector forecasts suggest that the monthly core PCE reading will be 0.2 percent. If those forecasts hold true, then core PCE inflation in December will remain close to 2 percent, when measured on a 3-month or 6-month basis.

PCE inflation of 2 percent is our goal, but that goal cannot be achieved for just a moment in time. It must be sustained at a level of 2 percent. As I said earlier, based on economic activity and the cooling of the labor market, I am becoming more confident that we are within striking distance of achieving a sustainable level of 2 percent PCE inflation. I think we are close, but I will need more information in the coming months confirming or (conceivably) challenging the notion that inflation is moving down sustainably toward our inflation goal.

This brings me to the implications for monetary policy. The progress I have noted on inflation, combined with the data in hand on economic and financial conditions and my outlook has made me more confident than I have been since 2021 that inflation is on a path to 2 percent. While the emphasis of policy since that time has been on pushing down inflation, given the strength of the current labor market the FOMC's focus now is likely to be more balanced: keeping inflation on a 2 percent path while also keeping employment near its maximum level. Today, I view the risks to our employment and inflation mandates as being more closely balanced. I will be watching for sustained progress on inflation and modest cooling in the labor market that does not harm the economy.

I believe policy is set properly. It is restrictive and should continue to put downward pressure on demand to allow us to continue to see moderate inflation readings. So, as I said, I believe we are on the right track to achieve 2 percent inflation.

As long as inflation doesn't rebound and stay elevated, I believe the FOMC will be able to lower the target range for the federal funds rate this year. This view is consistent with the FOMC's economic projections in December, in which the median projection was three 25-basis-point cuts in 2024. Clearly, the timing of cuts and the actual number of cuts in 2024 will depend on the incoming data. Risks that would delay or dampen my expectation for cuts this year are that economic activity that seems to have moderated in the fourth quarter of 2023 does not play out; that the balance of supply and demand in the labor market, which improved over 2023, stops improving or reverses; and that the gains on moderating inflation evaporate.

One piece of data I will be watching closely is the scheduled revisions to CPI inflation due next month. Recall that a year ago, when it looked like inflation was coming down quickly, the annual update to the seasonal factors erased those gains. In mid-February, we will get the January CPI report and revisions for 2023, potentially changing the picture on inflation. My hope is that the revisions confirm the progress we have seen, but good policy is based on data and not hope.

When the time is right to begin lowering rates, I believe it can and should be lowered methodically and carefully. In many previous cycles, which began after shocks to the economy either threatened or caused a recession, the FOMC cut rates reactively and did so quickly and often by large amounts. This cycle, however, with economic activity and labor markets in good shape and inflation coming down gradually to 2 percent, I see no reason to move as quickly or cut as rapidly as in the past. The healthy state of the economy provides the flexibility to lower the (nominal) policy rate to keep the real policy rate at an appropriate level of tightness. But I will end by repeating that the timing and number of rate cuts will be driven by the incoming data.

Thank you.
### Q&A Transcript
<a href="#" onclick="seekToTime(1215); return false;">(20:15)</a>

**David Wessel:** Thank you, Governor Waller. Let me pick up where you left off. You said that you've basically described a soft landing scenario. Congratulations on that if you can pull it off. We have a Fed funds rate that's between 5.25% and 5.5%. And as you point out, inflation is approaching your 2% goal. So why move slowly and gradually? Why talk about three-quarter point moves on the Fed funds rate? Won't that leave financial conditions restrictive and risk the overtightening that you warned against?

**Christopher Waller:** Well, as I said, the key thing is the economy is doing well. It's giving us the flexibility to move carefully and methodically so we can watch the Fed, see how the data comes in, see if progress is being sustained. The worst thing would be if it all reverses and we've already started cutting. We really want to see evidence that this progress, this trend we're seeing in the real data and the inflation data, continues. I believe it will, but we have to see that before we can start making decisions. As I said, we can slowly calibrate the real rate cut down. If we think we need to move it faster, we could, depending on what the data says. The key is we have the flexibility that we can be methodical and careful. That's where my point was. In earlier times, a recession would hit, some bad negative shock, and the FOMC had to move fast and by a lot. That's not the situation we're facing right now, so we can take our time to make sure we do this right.
#### First Rate Cut
<a href="#" onclick="seekToTime(1320); return false;">(22:10)</a>

**David Wessel:** And how will you decide when it's time to pull the trigger on the first rate cut? What are you thinking? 

**Christopher Waller:** That'll be up to the committee to decide when they think they've seen enough progress. There may be disagreements about whether we need more, we've seen enough, but that's where the committee will talk about this as we go forward. So, you know, I'll just leave it at that.

<a href="#" onclick="seekToTime(1344); return false;">(22:24)</a>

**David Wessel:** Let me ask you a little bit about the relative merits of cutting early but gradually versus waiting longer and cutting more quickly. You make the point that you don't want to go too soon because inflation might turn out to be more variant, but isn't there a risk if you go too slowly, given the lags of monetary policy, that we could end up overtightening? How do you guard against that? 

**Christopher Waller:** That is one of the risks that I've mentioned. I think we're all very aware of it. Chair Powell even talked about that at his press conference in December, that we're in this unusual place where we can actually lower the policy rate not because there's a shock to the economy in a recession, but we can bring it down to keep the real policy rate at the right level of tightness to maintain our inflation goals but not damage the economy in any serious way. So I wouldn't want to start until we were thoroughly convinced that inflation was sustainably near our 2% target. It'll bounce around with any monthly data. We have to be ready for that and look through some of that. When we think we're there and it'll stay there, then we can start saying, okay, it's time to cut, and then we can start thinking how fast do we want to cut or how often, what the pace is, or how big the cuts. Those are all things we can determine once we decide to move. There's no real radical reason that we have to bring the real policy rate down from like 3% to 50 basis points in one meeting. We don't have to do that. We can take our time and see how that all works.
#### Inflation Outlook
<a href="#" onclick="seekToTime(1444); return false;">(24:04)</a>

**David Wessel:** One of the issues when you look at the underlying inflation data is that rents have been pretty sticky, stickier than a lot of us anticipated. Do you think you need to see rents come down, the housing shelter index come down, or is there a risk that you or can you not can you look through that and say it's going to come down, we don't need to wait to see that materialize? 

**Christopher Waller:** Yeah, I mean, we've been talking about this since the end of 2022, that rent inflation, for all the signals we were given, rent inflation was going to come down. It's just taking a while to show up in the official CPI data, for exactly the reasons we all know: things tend to reset every 12 months, you have to wait till this all kind of works its way through. But most of the data we're seeing on new leases are showing rents have come down quite a bit, or down now to a more reasonable rate of increases. So, we all think it's all going to be there. But at the end of the day, I have never been a big fan of focusing on one component of the price index. You know, one time one's up, then this one's down. It's just, we take them all together. Food and energy are the only ones I kind of like to toss out because they're not necessarily good guides, but I don't want to get overly focused on one particular price and say, until I see that one coming down, we can't do anything. 

<a href="#" onclick="seekToTime(1534); return false;">(25:34)</a>

**David Wessel:** But it sounds to me like you're, it sounds to me like your best forecast, given the available data, is that inflation has come down, it's not just some transitory fluke, and that you'd be surprised if inflation reared its ugly head. You think we're going in the right direction, am I reading you correctly? 

**Christopher Waller:** I think so. I mean, one of the concerns we have, there's been a lot of talk that a lot of the drop in inflation over the last six months has all been supply side corrections. Well, once those things correct, those tailwinds are gone. So that'll tell us something about whether demand is still low, you know, it's being lowered enough to kind of keep inflation on that path, or once goods prices, other things bottom out, whether we'll see a rebound above 2% in a meaningful and sustained way. That's what those are the kind of things we want to be careful about before thinking about making the first rate cut.

<a href="#" onclick="seekToTime(1590); return false;">(26:30)</a>

**David Wessel:** So it sounds like you'd rather err on the side of waiting too long than going too soon.

**Christopher Waller:** Yeah, what "too long" means, is that one meeting, is that six? I don't know what waiting too long means, but you know, in the grand scheme of things, whether it's one, six weeks later, that's kind of hard to believe that's going to have a huge impact on the state of the economy. 
#### Balance Sheet 
<a href="#" onclick="seekToTime(1611); return false;">(26:51)</a>

**David Wessel:** Let me ask you a little bit about the balance sheet. Reserves are now at $3.5 trillion, the overnight reverse repurchase facility has gone from well over 2 trillion to about 600 billion. How are you thinking about the balance sheet? How will you decide when you've reached that Nirvana of ample reserves, and how close are we to that?

**Christopher Waller:** So, starting back in 2021, I was watching what was happening at the ON RRP, and what I was arguing at the time was that we were doing QE, we're putting reserves in the system, the banks for leverage reasons didn't want this on their balance sheet, told their corporate customers, get it out of our banks. They had to put it somewhere, they go to money market mutual funds who say, what are we supposed to do with it, there's a shortage of treasury bills, oh there's the ON RRP, let's give it right back to the Fed. That got up to over two trillion dollars. So, I interpret that as that's two trillion dollars worth of liquidity in the system that nobody needs or wants. So, logic to me seemed we could pull at least two trillion out before we had to get serious about worrying about the level of reserves. And so far, we've pulled out somewhere in the neighborhood of, I think, one and a half trillion dollars and everything's fine. So, that kind of perspective seems again to be borne out. Where we actually end up, I've made this argument many times now, but given the pace, if you look back to January 2019 reserves, there was no RRP, but reserves to nominal GDP was about 8%. Now banks are bigger, there may be some other reasons you might want slightly more, but figure maybe 10 to 11% would be a reasonable number. So as the RRP starts draining, and we can start looking at reserves, we'll start slowing down and start approaching these numbers with a lot more caution to see how things play out. We'll get a better sense of where that is, but I've been kind of using this number say roughly 10 to 11% of GDP as an approximate endpoint for draining reserves out of the system.

<a href="#" onclick="seekToTime(1744); return false;">(29:04)</a>

**David Wessel:** Do you expect the ON RRP to basically go to zero, and then you'll know?

**Christopher Waller:** There's no reason for it to have anything in it. In my view, it was basically a safety net originally designed to help put a floor under the Fed funds rate, because of this weirdness the last two years between treasury bill rates and our RRP rate. Everybody just parked money there instead. There's nothing fundamental about money being in that facility that it matters. So we really prefer to have anything in the banking system in reserves, as long as there aren't problems with leverage ratios or anything else for the banks. But we can then see how the draining of the reserves works, and we'll be careful about how we do all that.

**David Wessel:** Do you expect to slow the pace of tapering in the next few months?

**Christopher Waller:** I would say sometime this year, it would be a reasonable thing to start thinking about it. I don't think I'm speaking out of school, but it's been coming close to two years since we first announced tapering, and I think when we did these numbers, it made sense that sometime in 2024, you would start thinking about tapering the pace to get back. Now, personally, I don't think we need to taper the pace on MBS; we're not even hitting the cap. So we don't really need to keep MBS on my balance sheet as much, so I'm all in favor of letting those just continue to run off at the current pace. But Treasuries, we can start tapering that back and get reserves to where we want them. One other point to make, now everybody likes to go back to September 2019 and say all of a sudden you didn't have enough reserves and there's a bunch of kerfuffle in the financial markets. We have a standing repo facility now that we didn't have in place. So if we start seeing reserves getting tighter and tighter, we may start seeing a lot of activity coming to the standing repo facility, and that'll be a good signal for us that hey, we're getting to that point. Again, that's a tool we didn't have back in 2019 that we do have now to help relieve kind of pressure on demand for reserves.

<a href="#" onclick="seekToTime(1869); return false;">(31:09)</a>

**David Wessel:** Right, so just to explain that to people who may not be familiar with the explosion of facilities under your leadership at the board, you're complicit in this. Basically, if the banks don't have enough reserves, they can take their treasuries and bring them to the Fed at the standing repo facility and get something which is essentially a cash substitute. One of the things I've wondered about is that on one hand there seems to be a sense among many monetary policymakers that we don't want the Fed's balance sheet to be too big, we don't want the Fed to be too big a force in the economy, that's what leads you to begin to do quantitative tightening. On the other hand, we've put demands on the banks to hold more reserves with these liquidity rules and this sort of worry that how do we protect ourselves against instability. How do you balance those, and aren't those somewhat at tension, those two goals?


**Christopher Waller:** Yeah, I mean, I've made an argument for probably 10 years that there's no economic theory that tells you how big a central bank's balance sheet should be. I know of no theory that tells you. You have Switzerland, where it's basically 100% of GDP or some number like that. So, there's no real theory. And from a point of view of the reserves, I love a floor system because, as Milton Friedman once said, you want to put enough liquidity in the system that you satiate the system so there's no scarcity or shortage. And I always like to use a little example: if you were the government, you could provide clear, clean drinking water at zero marginal cost, why would you make it scarce? You wouldn't; you'd put in whatever the market needs. And that's just really, we're putting in reserves, taking treasuries. It's not like we're taking out commercial loans or car loans or anything; we're just taking treasuries, and there's a lot of Treasury issuance, so it's not like there's a shortage of treasuries in the world per se. But that's kind of how I look at it. There's no real theory about it. We need to put it in. I love to follow the Friedman Rule and make reserves abundant enough that there's no scarcity, the banks, and the system have what they need. That's just good economic efficiency.

<a href="#" onclick="seekToTime(2011); return false;">(33:31)</a>

**David Wessel:** So why struggle to get to ample? Why not just stick with abundant reserves?

**Christopher Waller:** You could. I mean, I had a paper a few years ago where I looked at a floor system, and the problem with the large balance sheet is kind of what we're running into now. You potentially have a situation where your payments on interest on reserves are above your earnings. Now, there's nothing that affects our operating and monetary policy whatsoever, but the optics, and I, at the title of the paper I had was some unpleasant fiscal arithmetic. The optics of this are just bad. It doesn't have anything to do with monetary policy at all effectiveness. It's nothing, but it just kind of looks bad that you're not turning over any seigniorage revenues to the Treasury, and you're delaying when you'll start doing it. And for that reason, you may want to think about not keeping your balance sheet too big. But that's really one of the few reasons for doing it. There's a misperception that we're again, we're taking real resources out of the economy for lending by banks and car loans and construction, but none of that's going on. We're just taking out treasuries.
#### Banking Regulation
<a href="#" onclick="seekToTime(2080); return false;">(34:40)</a>

**David Wessel:** Governor Waller, you voted against the recent proposal to increase the capital that big banks are required to set aside. There's been a lot of criticism of that and lots of comments, and I think you've indicated that you're hoping that there will be a compromise that you can support. So where are we in that process? Do you think we're getting to a bank capital proposal with which you're comfortable?

**Christopher Waller:** Well, yeah, I voted not to put this out because I saw what I thought were some very major problems. First of all, the original intent of this thing was to harmonize regulation across the world, and it was not happening. European Banks, UK Banks were not going to carry through, we decided to go ahead. That's not harmonizing anything. The original intent, I believe, was not to have a big increase in capital, but that is what's happening. We're basically going to impinge on capital market functioning, both in terms of products, services, pricing. I don't understand why we want to do that in a way that it's not seriously showing any threats. I've made a big deal about operational risk, which is more than half of the increase, and the way it's calculated made absolutely no sense to me whatsoever. It should be restricted. So there are lots of reasons why I was opposed to it and voted not to send this thing out. And I think the blowback we've seen from the banking industry and the hill has shown that this is not necessarily a good rule, proposed rule as it stands now. So it's got to have a major overhaul, in my view, to get a reasonable product, and possibly even just taking it back and starting over. But I believe there's a lot of work that could be done. We're a very con-Fed. Chair Powell has said we want to have products to go out with broad support of the board. That may be possible if enough major things get redone, that we could get broad support for it, but it's got to have a lot of work. And like I said, it might even be best to just pull it back and then work on this and then put it back out at a later date. 

**David Wessel:** So where are we in the process? Are you talking about changes that might make it possible for you to support it?

**Christopher Waller:** I believe there are discussions going on. We're taking feedback from the industry. Today I think is a closing on a comment period on the proposed rulemaking. We'll take all that into account. We're talking to other agencies. We're talking among ourselves here at the board about how we could do something. So there is stuff going on. It is working, and we'll see in the end what ends up happening.

**David Wessel:** Another regulatory issue that I was asked to raise with you is the Regulation II, where the Fed has proposed reducing the amount that it's taken when someone uses a debit card, and of course, the merchants love this because they want a smaller cut, and the banks say it's going to be a problem. Have you thought about that and where do you stand on that one?

**Christopher Waller:** Yeah, I mean, this is one of those things, you know, I wish Congress had never given us the responsibility for doing. We did, so you know, with anything that's now our job, I take a very narrow, legalistic view. Congress told us to set this interchange fee based on the cost of these transactions. We had a method we did when we first did it. We hadn't changed it in roughly almost 14 years, even though there's been a tremendous technological change over the last decade. So, there was a decision to look at it, collect data from the banks, get a sense of where their true costs are, and then, based on the same methodology, the same approach, the same criteria that we did before, pick that number and put it out there. And that's what we did. I mean, I don't want to pick winners and losers; there's no fun in having to do any of that, but Congress told us to do it, and we kind of just did it again, like we did roughly 14 years ago, whatever the exact number of years was. So, I just try to keep a very focused, narrow, legal view that Congress did, and we're following that to the T.

**David Wessel:** A couple of questions have come in while we've been talking. One of them, which is a good one I should have thought of, is to what extent do you think that the crisis in the Red Sea, the shipping costs and rate going up, could be a problem in controlling inflation? How big a risk is that to the outlook?

**Christopher Waller:** You know, there are alternative routes to routing stuff; you don't have to go through the Red Sea. So, you know, now you're just talking about substitution about where you're going to go and how you're going to do it. So, in that sense, there could be some one-time effects and shipping raids that get passed through, but I don't see it potentially being a big impact on certain global or US inflation unless this thing spirals into something much more severe than it appears that it is right now.
#### Fiscal Policy
<a href="#" onclick="seekToTime(2383); return false;">(39:43)</a>

**David Wessel:** Another question was what your view is about what role that fiscal policy played in causing the inflation that you've been working so hard to restrain. How big an issue was fiscal policy, and how big an issue is fiscal policy now as you try and calibrate the right pace of monetary easing?

**Christopher Waller:** From a simple macroeconomics point of view, if you're going to increase the spending in the debt by six trillion dollars in a matter of two years and then say that has no effect on demand, that seems just impossible to me. It isn't the only thing that contributed to the inflation, but it certainly had to have had an impact. The reason I say that is, people have been talking a lot about how all the last six months shows this was all supply, all supply. Well, if these are temporary supply shocks, when they unwind, the price level should go back down to where it was. It's not. Go to Fred, pull up CPI, take the log, look at that thing. The level of inflation is permanently higher. That doesn't happen with supply shocks; that comes from demand. And this was a permanent increase in demand, permanent increase in debt. So I think there clearly was an effect, a permanent increase in the price level.

**David Wessel:** You mean not in the pace of inflation?

**Christopher Waller:** Yes, yes. The price level, right? Think, go up and then come back down. 

**David Wessel:** Do you think that fiscal policies are continuing to put upward pressure on prices now?

**Christopher Waller:** When it comes to fiscal policy, our kind of rules have always been that we don't, you know, Congress does what it wants, and then we take that as given and set policy. So that's it, that's all I do. So it's up to Congress to decide what they want to do, and then I'll take that. 

**David Wessel:** But taking fiscal policy as given now, do you feel that that's putting upward pressure on demand and making it harder for you to keep inflation from rising?

**Christopher Waller:** Well, most of the spending in the last fiscal policy, the last year or so, has been more on longer-term, right? Investment, manufacturing, renewable energy, all that stuff. Those things are more spread out over a decade, so yeah, there's going to be some impact, but it's probably not that big, particularly for consumer retail goods and things like that. That's not what any of the spending in the last years has been. 

**David Wessel:** You might say the fiscal spending was transitory. 

**Christopher Waller:** Yes, again, these are level effects. These are not permanent changes in trend inflation. They might have had some, but again, the IRA and all these things are stretched out over 10 years of spending, so any given year has a small impact.
#### Wage Growth
<a href="#" onclick="seekToTime(2547); return false;">(42:27)</a>

**David Wessel:** Let me ask you to elaborate a little more on the comments you made about wages. You said that you see a moderation of wage increases across various measures of labor compensation that you expect will be consistent with progress towards 2% inflation. Do the pace of wage increases have to slow in order for you to reach your goal, or is this a period of catchup? How do we know what wage increases are consistent with 2% inflation?

**Christopher Waller:** Well, the standard economic answer you'd come out of from theory is that nominal wage growth should be equal to productivity growth plus expected inflation. That would be the nominal wage growth. So if inflation's 2%, and productivity growth, which has averaged basically 1 and a half percent for the last 15 plus years, you're at three and a half percent nominal wage goal. So when we often say wage growth needs to be consistent with our goal, we mean also that it's consistent with productivity. So at 4%, you're a little high but you're not that high. You can come down, but it's not like when it's seven or eight percent and productivity is one and a half percent. And right now, we're in a little boom in productivity, which also could support it for a while temporarily. We'll see whether that productivity boom continues. I sure hope it does, but if you look back over the last period since the pandemic started, productivity growth has been one and a half percent, just exactly what it was in the previous decade. So we'll have to see a lot more before. But that's kind of the rule of thumb I think most economists have for what nominal wage growth should be: productivity growth plus expected inflation.

**David Wessel:** Recognizing that predicting productivity growth into the future is difficult, are you optimistic that whatever's going on, whether it's more efficiency in the economy or something, will allow us to enjoy a somewhat faster pace of productivity growth over the next several years?

**Christopher Waller:** Yeah, I mean, we really would love to see that. Productivity growth is the heart and soul of raising living standards for people over a decade. That is what does it. Now, back in the 90s, we had a big productivity boom, but we all knew it was because you finally incorporated computers, PCs, everything into the system. When I look out right now and think, what would it be that's causing this big boom in productivity to be sustained, it can't be AI, that just started. Usually, these innovations take a decade to filter all through the entire economy before they show up. Now, maybe there's ways that firms have done stuff coming out of the pandemic that are still being used that are efficient, just the way we're doing the speech. This would not have been done prior to 2020. Restaurant services, manufacturing, everybody figured this out. The shortage of labor, firms had to think about other ways with capital to produce. They're not going to unwind any of that once they do it. So there could be some things that lead to sustained productivity growth for a while, but other than that, I don't really see exactly what it would be. AI could be very promising, but it's really too early to show up in the aggregate data. That's down the road.
#### R-star
<a href="#" onclick="seekToTime(2743); return false;">(45:43)</a>

**David Wessel:** One thing that a lot of economists have focused on a lot is the long-run equilibrium interest rate, so-called r-star. And the view is that if you could discern r-star, you know that what if the Fed funds rate is above that, that's restrictive, and vice versa if it's below that. Do you find that a useful concept, and do you have any sense of whether we're going to go back to a low r-star world?


**Christopher Waller:** I mean, I think it is a useful concept because if we think about simple things like Taylor rules, there's some equilibrium real rate. So you know where your terminal, your neutral policy rate is, you got to have some estimate of what this real rate is. The real rate you want to think about is something that's a close substitute for reserves, or which is what the rate we control, that has to be some very safe liquid government debt instrument. It is not physical capital, it is not equities. The rate of return on fiscal capital for the last 40 years has been roughly 7%, and it doesn't move. There's some good academic work out there that has shown this. What you've seen is the real return on safe liquid government debt declined for 40 years from about 4% down to roughly a half a percent to zero. So there's something special about government debt, and that has driven this sort of long-run decline. And there could be lots of factors that could explain that decline, but then you have to think what is it that suddenly is going to cause it to reverse and go up? If it's demographics, why is demographics going to suddenly change now? If it's productivity, it's got to affect a real return in capital, it can't just affect r-star. And we're not seeing those things moving together. One thing is just potentially there is a shortage of safe liquid government debt in the world, a shortage of safe assets, and that would drive up the price and drive down the yield of those assets. But for that to happen, the trend growth of demand has to outpace the trend growth of supply to keep that real rate going down. If that reverses, you could suddenly see r-star start to go up. So that's why I think I have, and some other people have been concerned, that the outlook for fiscal policy, whatever it is, could have the implication if it starts rising faster than the demand for these products, you might see a drop in the price and increase in the real return on these assets. To me, that's one thing that could happen.

**David Wessel:** And how do you find this a useful guide to think about where you want R to go or not?

**Christopher Waller:** I do. I mean, you have to kind of figure out some estimate of what this real rate is. Unless you just want to do what are called like first difference rules and Taylor rules where you don't need to think about this thing, and you just say, 'Hey, the economy looks like we're at target, just whatever rate you're at, just stop there.' That's one argument for that. We don't really know, so just when the economy looks stable at 2% growth, unemployment at four or five, whatever that interest rate is, just stop there. That's your neutral history.

<a href="#" onclick="seekToTime(2937); return false;">(48:57)</a>

**David Wessel:** So let me close on this. As I said earlier, you joined the Federal Reserve Board in December 2020, we were in the throes of the pandemic. It's been an extraordinarily interesting period in economic policy, with a huge response to the pandemic. The vaccines came online, lots of fiscal stimulus, lots of monetary stimulus. We enjoyed a very quick recovery, quicker than a lot of us expected. As you pointed out in your speech, we were thinking about the relationship between unemployment and inflation maybe differently. When you look back at what we've learned over the last two or three years about how the economy functions, what are the things that stand out to you that we really need to be thinking hard about, that maybe history wasn't the best guide?

**Christopher Waller:** Yeah, so I think this issue about vacancies and unemployment, or labor market tightness as it's called in labor search models, that was never really built into Philips curve analysis in the past. But now, everything I see, more recent academic work, more policy analysis, the best measure of labor market tightness is not just the unemployment rate, right? It's the vacancy to the unemployment rate. That really is, has got to be the case, and I think that's a step forward in thinking. Look, we got to think about a broader, more accurate measure than just the traditional Philips curve. It's not that it's potentially wrong, I've never been a big fan of it, but at least people are thinking about how to think about what happened in the last two years and how do we think about policy going forward with the right kind of analytical tools to do that. So I think that's been very good measure of labor market tightness is not just the unemployment rate, right? It's a vacancy to the unemployment rate. That really is what has got to be the case, and I think that's a step forward in thinking. Look, we got to think about a broader, more accurate measure than just the traditional Philips curve. It's not that it's potentially wrong. I've never been a big fan of it, but at least people are thinking about how to think about what happened in the last two years and how do we think about policy going forward with the right kind of analytical tools to do that. So I think that's been very good. 

I think just the robustness with which the US came back, and there's been some debates about the difference between Europe and the US. I was just in Europe at some meetings last week, and this came up: that Europe is flat, their GDP has not come back. It basically got back and then it's just completely flattened out. It hasn't gone on, stayed on trend. And so there's a lot of discussion about why the US recovered so well and Europe has not. Maybe it's the policies that were done during the pandemic. In Europe, they protected the workers on the job, and we just basically said we'll just give you unemployment insurance, and firms just let people go, people quit, and then there was a matching. Maybe that had some advantages that we just aren't seeing in Europe where nobody left their firm; they stayed there, they got paid by the government, but there was no resorting or reallocation of labor. So maybe there's something to be learned from there, from an academic point of view. 

The other thing to learn is that inflation isn't dead. For 40 years, people, or 30 years, people thought, 'Yeah, when inflation, there's no such thing as inflation, we don't even need to worry about it.' Well, we do, and that is what we have to, you know, we can't go to sleep on that. It's our job to make sure that it stays at 2%, and that's it. 
#### Framework Review
<a href="#" onclick="seekToTime(3125); return false;">(52:05)</a>

**David Wessel:** So, how does that inform your thinking about the framework of the Fed's monetary policy, which you'll be beginning to revisit at the end of this year?

**Christopher Waller:** I think there are some good lessons learned about what we saw. The old framework was really backward-looking, in the sense it was like trying to solve the problems from the previous decade that we thought were going to continue, and then we got punched in the face with what happened after 2020. So it is going to lead us to think about what is the right framework for how we do it now. We have a dual mandate, so it's not going to be like we're going to ignore employment and just focus on price stability. That's not going to happen. So those kind of things are not going to be seriously considered, but there'll probably be a lot of discussion in terms of what kind of framework, how do we want to think about operating procedure, how worried are we about the lower zero lower bound going forward, which was our nemesis for a decade. So there'll be a lot of discussion, and we'll look for input from the general public, academia, policy world, just like we did last time.

**David Wessel:** Great, well, with that, thank you very much for your time. And let me add my thanks to the AV and Communications team at Brookings for allowing us to do this, even though Washington is paralyzed by 4 inches of snow. I appreciate your time and your very crisp answers to the questions.

**Christopher Waller:** Alright, thank you, everyone. I appreciate it, especially again the AV staff for pulling this together at the last minute.


* * *

[^1]: See Christopher J. Waller (2023), "Something's Got to Give," speech delivered at the Distinguished Speaker Seminar, European Economics and Financial Center, London, October 18, and "Something Appears to Be Giving," speech delivered at the American Enterprise Institute, Washington, D.C., November 28. The views expressed here are my own and not necessarily those of my colleagues on the Federal Open Market Committee. [Return to text](#f1)

[^2]: See Christopher J. Waller (2022), "Responding to High Inflation, with Some Thoughts on a Soft Landing," speech delivered at the Institute for Monetary and Financial Stability (IMFS) Distinguished Lecture, Goethe University Frankfurt, Germany, May 30. [Return to text](#f2)

[^3]: See Figura and Waller (2022). ["What does the Beveridge curve tell us about the likelihood of a soft landing?,"](https://doi.org/10.17016/2380-7172.3190) FEDS Notes. Washington: Board of Governors of the Federal Reserve System, July 29, 2022. [Return to text](#f3)

[^4]: For example, the movement of Goldman Sachs' Financial Conditions Index looks a lot like that of the 10-year Treasury yield and is close to its levels in July. The Federal Reserve's Financial Conditions Impulse on Growth index also shows a downward movement from its peak earlier in 2023, and its level continues to suggest that conditions are a headwind to economic activity. [Return to text](#f4)


